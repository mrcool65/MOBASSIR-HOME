import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { FLOOR_PLAN } from '../utils/floorPlanData'

function Door({ doorKey, doorData }) {
  const groupRef = useRef()
  const angleRef = useRef(0)
  const [open, setOpen] = useState(false)
  const { center, width, height, hingeSide, rotation } = doorData
  const hingeX = hingeSide === 'left' ? -width / 2 : width / 2

  useFrame((_, delta) => {
    const target = open ? (hingeSide === 'left' ? -Math.PI / 2 : Math.PI / 2) : 0
    angleRef.current = THREE.MathUtils.damp(angleRef.current, target, 8, delta)
    if (groupRef.current) groupRef.current.rotation.y = angleRef.current
  })

  return (
    <group position={[center.x, 0, center.z]} rotation={rotation}>
      <mesh position={[-width / 2 - 0.04, height / 2, 0]}>
        <boxGeometry args={[0.06, height, 0.08]} />
        <meshStandardMaterial color="#3a2a1a" roughness={0.7} metalness={0.2} />
      </mesh>
      <mesh position={[width / 2 + 0.04, height / 2, 0]}>
        <boxGeometry args={[0.06, height, 0.08]} />
        <meshStandardMaterial color="#3a2a1a" roughness={0.7} metalness={0.2} />
      </mesh>
      <mesh position={[0, height + 0.04, 0]}>
        <boxGeometry args={[width + 0.12, 0.06, 0.08]} />
        <meshStandardMaterial color="#3a2a1a" roughness={0.7} metalness={0.2} />
      </mesh>

      <group ref={groupRef} position={[hingeX, 0, 0]}>
        <mesh
          position={[hingeSide === 'left' ? width / 2 : -width / 2, height / 2, 0.02]}
          onClick={() => setOpen(value => !value)}
          castShadow
        >
          <boxGeometry args={[width, height, 0.04]} />
          <meshStandardMaterial color={open ? '#8a7a6a' : '#6a5a4a'} roughness={0.5} metalness={0.1} />
        </mesh>
        <mesh position={[hingeSide === 'left' ? width / 2 - 0.08 : -width / 2 + 0.08, height / 2, 0.07]}>
          <sphereGeometry args={[0.04, 12, 12]} />
          <meshStandardMaterial color="#c0a050" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
    </group>
  )
}

function Doors() {
  return <group>{Object.entries(FLOOR_PLAN.doors).map(([key, data]) => <Door key={key} doorKey={key} doorData={data} />)}</group>
}

export default Doors
