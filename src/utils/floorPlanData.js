// Single source of truth for the 3D house, navigation and collision layout.
export const FLOOR_PLAN = {
  house: {
    width: 10,
    depth: 8,
    height: 2.8,
    wallThickness: 0.15,
    floorY: 0,
    ceilingY: 2.8,
    exteriorMinX: -5,
    exteriorMaxX: 5,
    exteriorMinZ: -4,
    exteriorMaxZ: 4,
    balconyMinX: -4.5,
    balconyMaxX: 4.5,
    balconyMinZ: -5,
    balconyMaxZ: -4
  },

  rooms: {
    kitchen: { minX: -4.85, maxX: -0.15, minZ: 1.25, maxZ: 3.85, label: 'Kitchen' },
    bathroom: { minX: 0.15, maxX: 4.85, minZ: 1.25, maxZ: 3.85, label: 'Bathroom' },
    bedroom1: { minX: -4.85, maxX: -0.15, minZ: -3.75, maxZ: -0.85, label: 'Bedroom 1' },
    bedroom2: { minX: 0.15, maxX: 4.85, minZ: -3.75, maxZ: -0.85, label: 'Bedroom 2' },
    balcony: { minX: -4.35, maxX: 4.35, minZ: -4.85, maxZ: -4.05, label: 'Balcony' },
    hallway: { minX: -0.075, maxX: 0.075, minZ: -3.75, maxZ: 3.85, label: 'Hallway' },
    entrance: { minX: -0.9, maxX: 0.9, minZ: 3.85, maxZ: 4.0, label: 'Entrance' }
  },

  doors: {
    bedroom1: {
      center: { x: -2.8, z: -0.8 }, width: 0.8, height: 2.2,
      hingeSide: 'left', wallOrientation: 'horizontal', wallZ: -0.8,
      wallXStart: -4.9, wallXEnd: -0.1, rotation: [0, 0, 0]
    },
    bedroom2: {
      center: { x: 2.8, z: -0.8 }, width: 0.8, height: 2.2,
      hingeSide: 'right', wallOrientation: 'horizontal', wallZ: -0.8,
      wallXStart: 0.1, wallXEnd: 4.9, rotation: [0, 0, 0]
    },
    kitchen: {
      center: { x: -2.8, z: 1.2 }, width: 0.8, height: 2.2,
      hingeSide: 'left', wallOrientation: 'horizontal', wallZ: 1.2,
      wallXStart: -4.9, wallXEnd: -0.1, rotation: [0, 0, 0]
    },
    bathroom: {
      center: { x: 2.8, z: 1.2 }, width: 0.8, height: 2.2,
      hingeSide: 'right', wallOrientation: 'horizontal', wallZ: 1.2,
      wallXStart: 0.1, wallXEnd: 4.9, rotation: [0, 0, 0]
    },
    balcony: {
      center: { x: 0, z: -3.8 }, width: 0.8, height: 2.2,
      hingeSide: 'left', wallOrientation: 'horizontal', wallZ: -3.8,
      wallXStart: -4.85, wallXEnd: 4.85, rotation: [0, 0, 0]
    }
  },

  windows: {
    kitchen: {
      center: { x: -4.925, z: 2.5 }, width: 1.2, height: 1.0, sillHeight: 0.8,
      rotation: [0, Math.PI / 2, 0], wallOrientation: 'vertical', wallX: -5,
      wallZStart: 1.2, wallZEnd: 3.8
    },
    bathroom: {
      center: { x: 4.925, z: 2.5 }, width: 1.2, height: 1.0, sillHeight: 0.8,
      rotation: [0, -Math.PI / 2, 0], wallOrientation: 'vertical', wallX: 5,
      wallZStart: 1.2, wallZEnd: 3.8
    },
    bedroom1: {
      center: { x: -4.925, z: -2.2 }, width: 1.2, height: 1.0, sillHeight: 0.6,
      rotation: [0, Math.PI / 2, 0], wallOrientation: 'vertical', wallX: -5,
      wallZStart: -3.8, wallZEnd: -0.8
    },
    bedroom2: {
      center: { x: 4.925, z: -2.2 }, width: 1.2, height: 1.0, sillHeight: 0.6,
      rotation: [0, -Math.PI / 2, 0], wallOrientation: 'vertical', wallX: 5,
      wallZStart: -3.8, wallZEnd: -0.8
    }
  },

  interiorWalls: [
    { startX: 0, startZ: -3.8, endX: 0, endZ: 2.6, color: '#c4b5a0' },
    { startX: -4.9, startZ: 1.2, endX: -0.1, endZ: 1.2, color: '#c4b5a0' },
    { startX: 0.1, startZ: 1.2, endX: 4.9, endZ: 1.2, color: '#c4b5a0' },
    { startX: -4.9, startZ: -0.8, endX: -0.1, endZ: -0.8, color: '#c4b5a0' },
    { startX: 0.1, startZ: -0.8, endX: 4.9, endZ: -0.8, color: '#c4b5a0' },
    { startX: -4.9, startZ: 3.8, endX: -0.1, endZ: 3.8, color: '#c4b5a0' },
    { startX: 0.1, startZ: 3.8, endX: 4.9, endZ: 3.8, color: '#c4b5a0' }
  ],

  balconyWalls: [
    { startX: -4.5, startZ: -5, endX: 4.5, endZ: -5, color: '#b0a090' },
    { startX: -4.5, startZ: -5, endX: -4.5, endZ: -4, color: '#b0a090' },
    { startX: 4.5, startZ: -5, endX: 4.5, endZ: -4, color: '#b0a090' }
  ]
}

export const EXTERIOR_WALLS = [
  { startX: -5, startZ: -4, endX: 5, endZ: -4, color: '#d4c5b0' },
  { startX: -5, startZ: 4, endX: 5, endZ: 4, color: '#d4c5b0' },
  { startX: -5, startZ: -4, endX: -5, endZ: 4, color: '#d4c5b0' },
  { startX: 5, startZ: -4, endX: 5, endZ: 4, color: '#d4c5b0' }
]

export function getDoorOpening(door) {
  const half = door.width / 2
  if (door.wallOrientation === 'horizontal') {
    return {
      wallZ: door.wallZ,
      openingStart: door.center.x - half - door.wallXStart,
      openingEnd: door.center.x + half - door.wallXStart,
      openingBottom: 0,
      openingTop: door.height
    }
  }
  return {
    wallX: door.wallX,
    openingStart: door.center.z - half - door.wallZStart,
    openingEnd: door.center.z + half - door.wallZStart,
    openingBottom: 0,
    openingTop: door.height
  }
}

export function getWindowOpening(windowData) {
  const half = windowData.width / 2
  if (windowData.wallOrientation === 'horizontal') {
    return {
      wallZ: windowData.wallZ,
      openingStart: windowData.center.x - half - windowData.wallXStart,
      openingEnd: windowData.center.x + half - windowData.wallXStart,
      openingBottom: windowData.sillHeight,
      openingTop: windowData.sillHeight + windowData.height
    }
  }
  return {
    wallX: windowData.wallX,
    openingStart: windowData.center.z - half - windowData.wallZStart,
    openingEnd: windowData.center.z + half - windowData.wallZStart,
    openingBottom: windowData.sillHeight,
    openingTop: windowData.sillHeight + windowData.height
  }
}

export function getNavigationPosition(roomId) {
  const positions = {
    entrance: { x: 0, z: 3.45 },
    bedroom1: { x: -3.0, z: -2.2 },
    bedroom2: { x: 3.0, z: -2.2 },
    kitchen: { x: -3.0, z: 2.5 },
    bathroom: { x: 3.0, z: 2.5 },
    balcony: { x: 0, z: -4.55 }
  }
  return positions[roomId] || positions.entrance
}
