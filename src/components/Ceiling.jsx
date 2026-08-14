import React from 'react'

function Ceiling({ hidden = false }) {
  if (hidden) return null
  return (
    <mesh position={[0, 2.8, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <planeGeometry args={[9.7, 7.7]} />
      <meshStandardMaterial color="#e8ddd0" roughness={0.9} side={2} transparent opacity={0.86} />
    </mesh>
  )
}

export default Ceiling
