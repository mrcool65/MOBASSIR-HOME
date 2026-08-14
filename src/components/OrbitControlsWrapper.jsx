import React, { useEffect, useRef } from 'react'
import { OrbitControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

function OrbitControlsWrapper({ mode, target = [0, 1.4, 0] }) {
  const { camera } = useThree()
  const controlsRef = useRef()

  useEffect(() => {
    if (!controlsRef.current) return
    controlsRef.current.target.set(...target)
    controlsRef.current.update()
  }, [target])

  if (mode !== 'orbit') return null
  return <OrbitControls ref={controlsRef} camera={camera} target={target} enableDamping dampingFactor={0.05} minDistance={2} maxDistance={15} maxPolarAngle={Math.PI / 2.05} minPolarAngle={0.15} enablePan panSpeed={0.5} rotateSpeed={0.5} />
}

export default OrbitControlsWrapper
