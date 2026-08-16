import React from 'react'
import { EXTERIOR_WALLS, FLOOR_PLAN, getDoorOpening, getWindowOpening } from '../utils/floorPlanData'

function WallSegment({ startX, startZ, endX, endZ, opening = null, color = '#d4c5b0', height, thickness, id }) {
  const dx = endX - startX
  const dz = endZ - startZ
  const length = Math.hypot(dx, dz)
  const angle = Math.atan2(dz, dx)
  const pieces = []

  const makeMesh = (key, centerAlong, sizeAlong, y, sizeY) => (
    <mesh key={`${id}-${key}`} position={[startX + (dx / length) * centerAlong, y, startZ + (dz / length) * centerAlong]} rotation={[0, -angle, 0]} castShadow receiveShadow>
      <boxGeometry args={[sizeAlong, sizeY, thickness]} />
      <meshStandardMaterial color={color} roughness={0.62} metalness={0.08} />
    </mesh>
  )

  if (!opening) return makeMesh('full', length / 2, length, height / 2, height)

  const start = Math.max(0, opening.openingStart)
  const end = Math.min(length, opening.openingEnd)
  if (start > 0.01) pieces.push(makeMesh('start', start / 2, start, height / 2, height))
  if (end < length - 0.01) pieces.push(makeMesh('end', (end + length) / 2, length - end, height / 2, height))

  const openingSize = Math.max(0, end - start)
  const openingCenter = (start + end) / 2
  if (opening.openingBottom > 0.01) pieces.push(makeMesh('bottom', openingCenter, openingSize, opening.openingBottom / 2, opening.openingBottom))
  if (opening.openingTop < height - 0.01) {
    const topHeight = height - opening.openingTop
    pieces.push(makeMesh('top', openingCenter, openingSize, opening.openingTop + topHeight / 2, topHeight))
  }
  return pieces
}

function findOpening(wall) {
  const horizontal = Math.abs(wall.startZ - wall.endZ) < 0.001
  const vertical = Math.abs(wall.startX - wall.endX) < 0.001

  for (const door of Object.values(FLOOR_PLAN.doors)) {
    if (horizontal && door.wallOrientation === 'horizontal' && Math.abs(wall.startZ - door.wallZ) < 0.001 && door.center.x >= Math.min(wall.startX, wall.endX) && door.center.x <= Math.max(wall.startX, wall.endX)) return getDoorOpening(door)
    if (vertical && door.wallOrientation === 'vertical' && Math.abs(wall.startX - door.wallX) < 0.001 && door.center.z >= Math.min(wall.startZ, wall.endZ) && door.center.z <= Math.max(wall.startZ, wall.endZ)) return getDoorOpening(door)
  }
  for (const windowData of Object.values(FLOOR_PLAN.windows)) {
    if (horizontal && windowData.wallOrientation === 'horizontal' && Math.abs(wall.startZ - windowData.wallZ) < 0.001 && windowData.center.x >= Math.min(wall.startX, wall.endX) && windowData.center.x <= Math.max(wall.startX, wall.endX)) return getWindowOpening(windowData)
    if (vertical && windowData.wallOrientation === 'vertical' && Math.abs(wall.startX - windowData.wallX) < 0.001 && windowData.center.z >= Math.min(wall.startZ, wall.endZ) && windowData.center.z <= Math.max(wall.startZ, wall.endZ)) return getWindowOpening(windowData)
  }
  return null
}

function Walls() {
  const { house, interiorWalls, balconyWalls } = FLOOR_PLAN
  const allWalls = [...EXTERIOR_WALLS, ...interiorWalls, ...balconyWalls]
  return (
    <group>
      {allWalls.map((wall, index) => (
        <WallSegment
          key={`wall-${index}`}
          {...wall}
          opening={findOpening(wall)}
          height={house.height}
          thickness={house.wallThickness}
          id={`wall-${index}`}
        />
      ))}
    </group>
  )
}

export default Walls
