import React from 'react'
import { FLOOR_PLAN } from '../utils/floorPlanData'

function Windows({ isNight }) {
  const windowColor = isNight ? '#1a2a3a' : '#7ab8d8'
  return <group>
    {Object.entries(FLOOR_PLAN.windows).map(([key, data]) => {
      const { center, width, height, sillHeight, rotation } = data
      return <group key={key} position={[center.x, 0, center.z]} rotation={rotation}>
        {[-1, 1].map(side => <mesh key={side} position={[side * (width / 2 + 0.04), sillHeight + height / 2, 0]}><boxGeometry args={[0.06, height + 0.12, 0.08]} /><meshStandardMaterial color="#3a2a1a" roughness={0.7} metalness={0.2} /></mesh>)}
        <mesh position={[0, sillHeight + height + 0.04, 0]}><boxGeometry args={[width + 0.12, 0.06, 0.08]} /><meshStandardMaterial color="#3a2a1a" roughness={0.7} metalness={0.2} /></mesh>
        <mesh position={[0, sillHeight - 0.04, 0]}><boxGeometry args={[width + 0.12, 0.06, 0.08]} /><meshStandardMaterial color="#3a2a1a" roughness={0.7} metalness={0.2} /></mesh>
        <mesh position={[0, sillHeight + height / 2, 0.02]}><boxGeometry args={[width * 0.85, height * 0.85, 0.04]} /><meshPhysicalMaterial color={windowColor} transparent opacity={isNight ? 0.32 : 0.5} roughness={0.05} metalness={0.1} clearcoat={0.8} envMapIntensity={0.5} /></mesh>
        <mesh position={[0, sillHeight + height / 2, 0.03]}><boxGeometry args={[0.03, height * 0.8, 0.02]} /><meshStandardMaterial color="#2a1a0a" /></mesh>
        <mesh position={[0, sillHeight + height / 2, 0.03]}><boxGeometry args={[width * 0.8, 0.03, 0.02]} /><meshStandardMaterial color="#2a1a0a" /></mesh>
        {isNight && <pointLight position={[0, sillHeight + height / 2, -0.15]} intensity={0.22} color="#ffd700" distance={2} />}
      </group>
    })}
  </group>
}

export default Windows
