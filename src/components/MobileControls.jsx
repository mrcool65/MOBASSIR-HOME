import React, { useEffect, useRef } from 'react'

function MobileControls({ cameraMode, isTeleporting = false, inputRef, lookRef }) {
  const joystickRef = useRef(null)
  const knobRef = useRef(null)
  const lookZoneRef = useRef(null)
  const pointerIdRef = useRef(null)
  const lookPointerIdRef = useRef(null)
  const lookLastRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const joystick = joystickRef.current
    if (!joystick) return
    const input = inputRef.current
    const maxDist = 48

    const reset = () => {
      input.moveX = 0
      input.moveY = 0
      if (knobRef.current) knobRef.current.style.transform = 'translate(-50%, -50%)'
      pointerIdRef.current = null
    }

    const update = (event) => {
      const rect = joystick.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      let dx = event.clientX - cx
      let dy = event.clientY - cy
      const dist = Math.hypot(dx, dy)
      if (dist > maxDist) {
        dx = (dx / dist) * maxDist
        dy = (dy / dist) * maxDist
      }
      input.moveX = dx / maxDist
      input.moveY = -dy / maxDist
      if (knobRef.current) knobRef.current.style.transform = `translate(calc(-50% + ${dx * 0.72}px), calc(-50% + ${dy * 0.72}px))`
    }

    const onDown = (event) => {
      pointerIdRef.current = event.pointerId
      joystick.setPointerCapture?.(event.pointerId)
      update(event)
    }
    const onMove = (event) => {
      if (event.pointerId === pointerIdRef.current) update(event)
    }
    const onUp = (event) => {
      if (event.pointerId === pointerIdRef.current) reset()
    }

    joystick.addEventListener('pointerdown', onDown)
    joystick.addEventListener('pointermove', onMove)
    joystick.addEventListener('pointerup', onUp)
    joystick.addEventListener('pointercancel', onUp)
    return () => {
      joystick.removeEventListener('pointerdown', onDown)
      joystick.removeEventListener('pointermove', onMove)
      joystick.removeEventListener('pointerup', onUp)
      joystick.removeEventListener('pointercancel', onUp)
    }
  }, [inputRef])

  useEffect(() => {
    const zone = lookZoneRef.current
    if (!zone) return
    const look = lookRef.current

    const onDown = (event) => {
      if (cameraMode !== 'walk' || isTeleporting) return
      lookPointerIdRef.current = event.pointerId
      lookLastRef.current = { x: event.clientX, y: event.clientY }
      zone.setPointerCapture?.(event.pointerId)
    }
    const onMove = (event) => {
      if (event.pointerId !== lookPointerIdRef.current) return
      const dx = event.clientX - lookLastRef.current.x
      const dy = event.clientY - lookLastRef.current.y
      look.x += dx
      look.y += dy
      lookLastRef.current = { x: event.clientX, y: event.clientY }
    }
    const onUp = (event) => {
      if (event.pointerId === lookPointerIdRef.current) lookPointerIdRef.current = null
    }

    zone.addEventListener('pointerdown', onDown)
    zone.addEventListener('pointermove', onMove)
    zone.addEventListener('pointerup', onUp)
    zone.addEventListener('pointercancel', onUp)
    return () => {
      zone.removeEventListener('pointerdown', onDown)
      zone.removeEventListener('pointermove', onMove)
      zone.removeEventListener('pointerup', onUp)
      zone.removeEventListener('pointercancel', onUp)
    }
  }, [cameraMode, isTeleporting, lookRef])

  if (cameraMode !== 'walk') return null

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 25, pointerEvents: 'none' }} aria-hidden="true">
      <div
        ref={lookZoneRef}
        style={{ position: 'absolute', inset: '0 0 0 50%', pointerEvents: 'auto', touchAction: 'none' }}
      />
      <div
        ref={joystickRef}
        style={{
          position: 'absolute', left: 20, bottom: 'max(24px, env(safe-area-inset-bottom))',
          width: 130, height: 130, borderRadius: '50%', pointerEvents: 'auto', touchAction: 'none',
          background: 'rgba(255,255,255,0.08)', border: '2px solid rgba(255,255,255,0.18)',
          backdropFilter: 'blur(12px)', boxShadow: '0 8px 30px rgba(0,0,0,0.28)'
        }}
      >
        <div style={{ position: 'absolute', inset: 24, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.12)', pointerEvents: 'none' }} />
        <div ref={knobRef} style={{
          position: 'absolute', top: '50%', left: '50%', width: 52, height: 52, borderRadius: '50%',
          transform: 'translate(-50%, -50%)', background: 'rgba(255,255,255,0.16)',
          border: '1px solid rgba(255,255,255,0.22)', boxShadow: '0 4px 18px rgba(0,0,0,0.25)', pointerEvents: 'none'
        }} />
      </div>
      <div style={{
        position: 'absolute', right: 24, bottom: 'max(34px, env(safe-area-inset-bottom))', width: 58, height: 58,
        borderRadius: '50%', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)',
        display: 'grid', placeItems: 'center', color: 'rgba(255,255,255,0.4)', fontSize: 20, pointerEvents: 'none'
      }}>↻</div>
    </div>
  )
}

export default MobileControls
