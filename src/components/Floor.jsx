import React from 'react'
import { FLOOR_PLAN } from '../utils/floorPlanData'

function RoomFloor({ room, color, y = 0.01 }) {
  const width = room.maxX - room.minX
  const depth = room.maxZ - room.minZ
  return (
    <mesh position={[(room.minX + room.maxX) / 2, y, (room.minZ + room.maxZ) / 2]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[width, depth]} />
      <meshStandardMaterial color={color} roughness={0.7} metalness={0.05} />
    </mesh>
  )
}

function Floor() {
  const { rooms } = FLOOR_PLAN
  return (
    <group>
      <RoomFloor room={rooms.kitchen} color="#6a7a5a" />
      <RoomFloor room={rooms.bathroom} color="#5a7a8a" y={0.012} />
      <RoomFloor room={rooms.bedroom1} color="#8a7a6a" />
      <RoomFloor room={rooms.bedroom2} color="#8a7a6a" y={0.012} />
      <RoomFloor room={rooms.balcony} color="#68786c" y={0.014} />
      <RoomFloor room={rooms.hallway} color="#77776b" y={0.015} />
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[10, 8]} />
        <meshStandardMaterial color="#77776b" roughness={0.82} />
      </mesh>
    </group>
  )
}

export default Floor
