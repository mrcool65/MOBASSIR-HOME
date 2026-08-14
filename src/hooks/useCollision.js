import { useCallback, useMemo } from 'react'
import { EXTERIOR_WALLS, FLOOR_PLAN } from '../utils/floorPlanData'

function segmentDistance(x, z, wall) {
  const horizontal = Math.abs(wall.startZ - wall.endZ) < 1e-6
  if (horizontal) {
    const minX = Math.min(wall.startX, wall.endX)
    const maxX = Math.max(wall.startX, wall.endX)
    const cx = Math.max(minX, Math.min(maxX, x))
    return { distance: Math.hypot(x - cx, z - wall.startZ), along: cx }
  }
  const minZ = Math.min(wall.startZ, wall.endZ)
  const maxZ = Math.max(wall.startZ, wall.endZ)
  const cz = Math.max(minZ, Math.min(maxZ, z))
  return { distance: Math.hypot(x - wall.startX, z - cz), along: cz }
}

function isInsideOpening(x, z, door, radius) {
  const half = door.width / 2 + radius
  if (door.wallOrientation === 'horizontal') {
    return Math.abs(z - door.wallZ) <= radius + 0.08 && Math.abs(x - door.center.x) <= half
  }
  return Math.abs(x - door.wallX) <= radius + 0.08 && Math.abs(z - door.center.z) <= half
}

export function useCollision() {
  const walls = useMemo(() => [
    ...EXTERIOR_WALLS,
    ...FLOOR_PLAN.interiorWalls,
    ...FLOOR_PLAN.balconyWalls
  ], [])

  const checkCollision = useCallback((x, z, radius = 0.28) => {
    // Keep the player inside the traversable envelope. Balcony is included.
    const inHouse = x >= -5 + radius && x <= 5 - radius && z >= -4 + radius && z <= 4 - radius
    const inBalcony = x >= -4.5 + radius && x <= 4.5 - radius && z >= -5 + radius && z <= -4 - radius
    if (!inHouse && !inBalcony) return { collides: true, reason: 'bounds' }

    for (const wall of walls) {
      if (isInsideOpening(x, z, FLOOR_PLAN.doors.bedroom1, radius) ||
          isInsideOpening(x, z, FLOOR_PLAN.doors.bedroom2, radius) ||
          isInsideOpening(x, z, FLOOR_PLAN.doors.kitchen, radius) ||
          isInsideOpening(x, z, FLOOR_PLAN.doors.bathroom, radius) ||
          isInsideOpening(x, z, FLOOR_PLAN.doors.balcony, radius)) {
        continue
      }

      const { distance } = segmentDistance(x, z, wall)
      if (distance < radius) return { collides: true, reason: 'wall' }
    }

    return { collides: false }
  }, [walls])

  return { checkCollision, boundaries: { walls } }
}
