import React, { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useCollision } from '../hooks/useCollision'

function WalkControls({
  mode = 'walk',
  inputRef,
  lookRef,
  isTeleporting = false,
  teleportRequest,
  onTeleportComplete,
  onPlayerPosition
}) {
  const { camera } = useThree()
  const keysRef = useRef(Object.create(null))
  const velocityRef = useRef(new THREE.Vector2())
  const forwardRef = useRef(new THREE.Vector3())
  const rightRef = useRef(new THREE.Vector3())
  const upRef = useRef(new THREE.Vector3(0, 1, 0))
  const startRef = useRef(new THREE.Vector3())
  const targetRef = useRef(new THREE.Vector3())
  const teleportStartTimeRef = useRef(0)
  const lastUiUpdateRef = useRef(0)
  const lastReportedXRef = useRef(Infinity)
  const lastReportedZRef = useRef(Infinity)
  const { checkCollision } = useCollision()

  useEffect(() => {
    const onDown = (event) => {
      const key = event.key.toLowerCase()
      keysRef.current[key] = true
      if (['w', 'a', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '].includes(key)) {
        event.preventDefault()
      }
    }
    const onUp = (event) => {
      keysRef.current[event.key.toLowerCase()] = false
    }
    window.addEventListener('keydown', onDown, { passive: false })
    window.addEventListener('keyup', onUp)
    return () => {
      window.removeEventListener('keydown', onDown)
      window.removeEventListener('keyup', onUp)
    }
  }, [])

  useEffect(() => {
    if (!teleportRequest) return
    startRef.current.copy(camera.position)
    targetRef.current.set(teleportRequest.x, 1.6, teleportRequest.z)
    teleportStartTimeRef.current = performance.now()
    velocityRef.current.set(0, 0)
  }, [teleportRequest, camera])

  useFrame((_, delta) => {
    const clampedDelta = Math.min(delta, 0.05)

    if (teleportRequest && isTeleporting) {
      const elapsed = performance.now() - teleportStartTimeRef.current
      const t = Math.min(elapsed / 500, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      camera.position.lerpVectors(startRef.current, targetRef.current, eased)
      camera.position.y = 1.6
      if (t >= 1) onTeleportComplete?.()
    } else if (mode === 'walk') {
      const input = inputRef?.current || { moveX: 0, moveY: 0 }
      const keys = keysRef.current
      const keyboardX = (keys.d || keys.arrowright ? 1 : 0) - (keys.a || keys.arrowleft ? 1 : 0)
      const keyboardY = (keys.w || keys.arrowup ? 1 : 0) - (keys.s || keys.arrowdown ? 1 : 0)
      const moveX = Math.abs(input.moveX) > 0.05 ? input.moveX : keyboardX
      const moveY = Math.abs(input.moveY) > 0.05 ? input.moveY : keyboardY

      const look = lookRef?.current
      if (look) {
        const yaw = look.x
        const pitch = look.y
        if (Math.abs(yaw) > 0.001 || Math.abs(pitch) > 0.001) {
          camera.rotation.order = 'YXZ'
          camera.rotation.y -= yaw * 0.003
          camera.rotation.x = THREE.MathUtils.clamp(camera.rotation.x - pitch * 0.003, -Math.PI / 2.2, Math.PI / 2.2)
          look.x = 0
          look.y = 0
        }
      }

      const hasInput = Math.abs(moveX) > 0.01 || Math.abs(moveY) > 0.01
      const acceleration = 9.0
      const damping = Math.exp(-8 * clampedDelta)
      if (hasInput) {
        const length = Math.hypot(moveX, moveY) || 1
        const nx = moveX / length
        const ny = moveY / length
        camera.getWorldDirection(forwardRef.current)
        forwardRef.current.y = 0
        forwardRef.current.normalize()
        rightRef.current.crossVectors(forwardRef.current, upRef.current).normalize()
        velocityRef.current.x += (rightRef.current.x * nx + forwardRef.current.x * ny) * acceleration * clampedDelta
        velocityRef.current.y += (rightRef.current.z * nx + forwardRef.current.z * ny) * acceleration * clampedDelta
      }

      velocityRef.current.multiplyScalar(damping)
      const speedLimit = 2.6
      const speed = velocityRef.current.length()
      if (speed > speedLimit) velocityRef.current.multiplyScalar(speedLimit / speed)

      if (Math.abs(velocityRef.current.x) + Math.abs(velocityRef.current.y) > 0.0001) {
        const nextX = camera.position.x + velocityRef.current.x * clampedDelta
        const nextZ = camera.position.z + velocityRef.current.y * clampedDelta
        const full = checkCollision(nextX, nextZ)
        if (!full.collides) {
          camera.position.x = nextX
          camera.position.z = nextZ
        } else {
          const xOnly = checkCollision(nextX, camera.position.z)
          const zOnly = checkCollision(camera.position.x, nextZ)
          if (!xOnly.collides) camera.position.x = nextX
          if (!zOnly.collides) camera.position.z = nextZ
          if (xOnly.collides) velocityRef.current.x = 0
          if (zOnly.collides) velocityRef.current.y = 0
        }
      }
      camera.position.y = 1.6
    }

    const now = performance.now()
    const x = camera.position.x
    const z = camera.position.z
    const movedEnough = Math.hypot(x - lastReportedXRef.current, z - lastReportedZRef.current) > 0.035
    if (onPlayerPosition && (movedEnough || now - lastUiUpdateRef.current > 120)) {
      lastUiUpdateRef.current = now
      lastReportedXRef.current = x
      lastReportedZRef.current = z
      onPlayerPosition(x, z)
    }
  })

  return null
}

export default WalkControls
