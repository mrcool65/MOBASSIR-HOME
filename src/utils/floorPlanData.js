// ============================================================
// MOBASSIR HOME
// Single source of truth for:
// 3D house layout + rooms + doors + windows + navigation
// + collision + balcony + balcony room
// ============================================================

export const FLOOR_PLAN = {
  // ==========================================================
  // HOUSE
  // ==========================================================
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

    // Main balcony
    balconyMinX: -4.5,
    balconyMaxX: 2.2,
    balconyMinZ: -5,
    balconyMaxZ: -4,

    // Separate balcony room
    balconyRoomMinX: 2.2,
    balconyRoomMaxX: 4.85,
    balconyRoomMinZ: -5,
    balconyRoomMaxZ: -4
  },

  // ==========================================================
  // ROOMS
  // ==========================================================
  rooms: {
    // ------------------------------
    // TOP LEFT
    // ------------------------------
    kitchen: {
      minX: -4.85,
      maxX: -0.15,
      minZ: 1.25,
      maxZ: 3.85,
      label: 'Kitchen'
    },

    // ------------------------------
    // TOP RIGHT
    // ------------------------------
    bathroom: {
      minX: 0.15,
      maxX: 4.85,
      minZ: 1.25,
      maxZ: 3.85,
      label: 'Bathroom'
    },

    // ------------------------------
    // BOTTOM LEFT
    // ------------------------------
    bedroom1: {
      minX: -4.85,
      maxX: -0.15,
      minZ: -3.75,
      maxZ: -0.85,
      label: 'Bedroom 1'
    },

    // ------------------------------
    // BOTTOM RIGHT
    // ------------------------------
    bedroom2: {
      minX: 0.15,
      maxX: 4.85,
      minZ: -3.75,
      maxZ: -0.85,
      label: 'Bedroom 2'
    },

    // ------------------------------
    // MAIN BALCONY
    // ------------------------------
    balcony: {
      minX: -4.35,
      maxX: 2.15,
      minZ: -4.85,
      maxZ: -4.05,
      label: 'Balcony'
    },

    // ------------------------------
    // SEPARATE BALCONY ROOM
    // ------------------------------
    balconyRoom: {
      minX: 2.25,
      maxX: 4.35,
      minZ: -4.85,
      maxZ: -4.05,
      label: 'Balcony Room'
    },

    // ------------------------------
    // CENTRAL HALLWAY
    // ------------------------------
    hallway: {
      minX: -0.075,
      maxX: 0.075,
      minZ: -3.75,
      maxZ: 3.85,
      label: 'Hallway'
    },

    // ------------------------------
    // TOP ENTRANCE
    // ------------------------------
    entrance: {
      minX: -0.9,
      maxX: 0.9,
      minZ: 3.85,
      maxZ: 4.0,
      label: 'Entrance'
    }
  },

  // ==========================================================
  // DOORS
  // ==========================================================
  doors: {
    // ========================================================
    // BEDROOM 1 DOOR
    // ========================================================
    bedroom1: {
      center: {
        x: -2.8,
        z: -0.8
      },

      width: 0.8,
      height: 2.2,

      hingeSide: 'left',

      wallOrientation: 'horizontal',
      wallZ: -0.8,

      wallXStart: -4.9,
      wallXEnd: -0.1,

      rotation: [0, 0, 0]
    },

    // ========================================================
    // BEDROOM 2 DOOR
    // ========================================================
    bedroom2: {
      center: {
        x: 2.8,
        z: -0.8
      },

      width: 0.8,
      height: 2.2,

      hingeSide: 'right',

      wallOrientation: 'horizontal',
      wallZ: -0.8,

      wallXStart: 0.1,
      wallXEnd: 4.9,

      rotation: [0, 0, 0]
    },

    // ========================================================
    // KITCHEN DOOR
    // ========================================================
    kitchen: {
      center: {
        x: -2.8,
        z: 1.2
      },

      width: 0.8,
      height: 2.2,

      hingeSide: 'left',

      wallOrientation: 'horizontal',
      wallZ: 1.2,

      wallXStart: -4.9,
      wallXEnd: -0.1,

      rotation: [0, 0, 0]
    },

    // ========================================================
    // BATHROOM DOOR
    // ========================================================
    bathroom: {
      center: {
        x: 2.8,
        z: 1.2
      },

      width: 0.8,
      height: 2.2,

      hingeSide: 'right',

      wallOrientation: 'horizontal',
      wallZ: 1.2,

      wallXStart: 0.1,
      wallXEnd: 4.9,

      rotation: [0, 0, 0]
    },

    // ========================================================
    // MAIN BALCONY DOOR
    // Central door from hallway to balcony
    // ========================================================
    balcony: {
      center: {
        x: 0,
        z: -3.8
      },

      width: 1.0,
      height: 2.2,

      hingeSide: 'left',

      wallOrientation: 'horizontal',
      wallZ: -3.8,

      wallXStart: -4.85,
      wallXEnd: 4.85,

      rotation: [0, 0, 0]
    },

    // ========================================================
    // BALCONY ROOM DOOR
    // Door from Bedroom 2 to Balcony Room
    // ========================================================
    balconyRoom: {
      center: {
        x: 3.45,
        z: -3.8
      },

      width: 0.75,
      height: 2.1,

      hingeSide: 'right',

      wallOrientation: 'horizontal',
      wallZ: -3.8,

      wallXStart: 2.25,
      wallXEnd: 4.85,

      rotation: [0, 0, 0]
    }
  },

  // ==========================================================
  // WINDOWS
  // ==========================================================
  windows: {
    // ========================================================
    // KITCHEN WINDOW
    // ========================================================
    kitchen: {
      center: {
        x: -4.925,
        z: 2.5
      },

      width: 1.2,
      height: 1.0,
      sillHeight: 0.8,

      rotation: [0, Math.PI / 2, 0],

      wallOrientation: 'vertical',

      wallX: -5,

      wallZStart: 1.2,
      wallZEnd: 3.8
    },

    // ========================================================
    // BATHROOM WINDOW
    // ========================================================
    bathroom: {
      center: {
        x: 4.925,
        z: 2.5
      },

      width: 1.2,
      height: 1.0,
      sillHeight: 0.8,

      rotation: [0, -Math.PI / 2, 0],

      wallOrientation: 'vertical',

      wallX: 5,

      wallZStart: 1.2,
      wallZEnd: 3.8
    },

    // ========================================================
    // BEDROOM 1 WINDOW
    // ========================================================
    bedroom1: {
      center: {
        x: -4.925,
        z: -2.2
      },

      width: 1.2,
      height: 1.0,
      sillHeight: 0.6,

      rotation: [0, Math.PI / 2, 0],

      wallOrientation: 'vertical',

      wallX: -5,

      wallZStart: -3.8,
      wallZEnd: -0.8
    },

    // ========================================================
    // BEDROOM 2 WINDOW
    // ========================================================
    bedroom2: {
      center: {
        x: 4.925,
        z: -2.2
      },

      width: 1.2,
      height: 1.0,
      sillHeight: 0.6,

      rotation: [0, -Math.PI / 2, 0],

      wallOrientation: 'vertical',

      wallX: 5,

      wallZStart: -3.8,
      wallZEnd: -0.8
    },

    // ========================================================
    // BALCONY ROOM WINDOW
    // ========================================================
    balconyRoom: {
      center: {
        x: 4.42,
        z: -4.45
      },

      width: 1.1,
      height: 0.9,
      sillHeight: 0.7,

      rotation: [0, 0, 0],

      wallOrientation: 'horizontal',

      wallZ: -5,

      wallXStart: 2.2,
      wallXEnd: 4.5
    }
  },

  // ==========================================================
  // INTERIOR WALLS
  // ==========================================================
  interiorWalls: [

    // --------------------------------------------------------
    // CENTRAL VERTICAL WALL
    // Separates left and right side
    // --------------------------------------------------------
    {
      startX: 0,
      startZ: -3.8,

      endX: 0,
      endZ: 3.8,

      color: '#c4b5a0'
    },

    // --------------------------------------------------------
    // KITCHEN / BATHROOM DIVIDER
    // --------------------------------------------------------
    {
      startX: -4.9,
      startZ: 1.2,

      endX: -0.1,
      endZ: 1.2,

      color: '#c4b5a0'
    },

    {
      startX: 0.1,
      startZ: 1.2,

      endX: 4.9,
      endZ: 1.2,

      color: '#c4b5a0'
    },

    // --------------------------------------------------------
    // BEDROOM 1 / HALLWAY
    // --------------------------------------------------------
    {
      startX: -4.9,
      startZ: -0.8,

      endX: -0.1,
      endZ: -0.8,

      color: '#c4b5a0'
    },

    // --------------------------------------------------------
    // BEDROOM 2 / HALLWAY
    // --------------------------------------------------------
    {
      startX: 0.1,
      startZ: -0.8,

      endX: 4.9,
      endZ: -0.8,

      color: '#c4b5a0'
    },

    // --------------------------------------------------------
    // TOP KITCHEN WALL
    // --------------------------------------------------------
    {
      startX: -4.9,
      startZ: 3.8,

      endX: -0.1,
      endZ: 3.8,

      color: '#c4b5a0'
    },

    // --------------------------------------------------------
    // TOP BATHROOM WALL
    // --------------------------------------------------------
    {
      startX: 0.1,
      startZ: 3.8,

      endX: 4.9,
      endZ: 3.8,

      color: '#c4b5a0'
    },

    // --------------------------------------------------------
    // BALCONY ROOM SIDE WALL
    // --------------------------------------------------------
    {
      startX: 2.2,
      startZ: -5,

      endX: 2.2,
      endZ: -4,

      color: '#b0a090'
    }
  ],

  // ==========================================================
  // BALCONY WALLS
  // ==========================================================
  balconyWalls: [

    // --------------------------------------------------------
    // FRONT BALCONY WALL
    // --------------------------------------------------------
    {
      startX: -4.5,
      startZ: -5,

      endX: 2.2,
      endZ: -5,

      color: '#b0a090'
    },

    // --------------------------------------------------------
    // LEFT BALCONY WALL
    // --------------------------------------------------------
    {
      startX: -4.5,
      startZ: -5,

      endX: -4.5,
      endZ: -4,

      color: '#b0a090'
    }
  ],

  // ==========================================================
  // BALCONY ROOM WALLS
  // ==========================================================
  balconyRoomWalls: [

    // --------------------------------------------------------
    // FRONT WALL
    // --------------------------------------------------------
    {
      startX: 2.2,
      startZ: -5,

      endX: 4.5,
      endZ: -5,

      color: '#b0a090'
    },

    // --------------------------------------------------------
    // RIGHT WALL
    // --------------------------------------------------------
    {
      startX: 4.5,
      startZ: -5,

      endX: 4.5,
      endZ: -4,

      color: '#b0a090'
    }
  ]
}


// ============================================================
// EXTERIOR WALLS
// ============================================================
//
// Main house exterior.
//
// IMPORTANT:
// Bottom exterior wall is intentionally split because
// the balcony and balcony-room are attached to the house.
// ============================================================

export const EXTERIOR_WALLS = [

  // ----------------------------------------------------------
  // TOP EXTERIOR WALL
  // ----------------------------------------------------------
  {
    startX: -5,
    startZ: 4,

    endX: 5,
    endZ: 4,

    color: '#d4c5b0'
  },

  // ----------------------------------------------------------
  // LEFT EXTERIOR WALL
  // ----------------------------------------------------------
  {
    startX: -5,
    startZ: -4,

    endX: -5,
    endZ: 4,

    color: '#d4c5b0'
  },

  // ----------------------------------------------------------
  // RIGHT EXTERIOR WALL
  // ----------------------------------------------------------
  {
    startX: 5,
    startZ: -4,

    endX: 5,
    endZ: 4,

    color: '#d4c5b0'
  },

  // ----------------------------------------------------------
  // BOTTOM LEFT WALL
  // Balcony opening
  // ----------------------------------------------------------
  {
    startX: -5,
    startZ: -4,

    endX: -4.85,
    endZ: -4,

    color: '#d4c5b0'
  },

  // ----------------------------------------------------------
  // BOTTOM RIGHT WALL
  // Balcony Room connection
  // ----------------------------------------------------------
  {
    startX: 4.85,
    startZ: -4,

    endX: 5,
    endZ: -4,

    color: '#d4c5b0'
  }
]


// ============================================================
// BALCONY ROOM EXTERIOR WALLS
// ============================================================

export const BALCONY_ROOM_EXTERIOR_WALLS = [

  // Front
  {
    startX: 2.2,
    startZ: -5,

    endX: 4.5,
    endZ: -5,

    color: '#b0a090'
  },

  // Right
  {
    startX: 4.5,
    startZ: -5,

    endX: 4.5,
    endZ: -4,

    color: '#b0a090'
  }
]


// ============================================================
// DOOR OPENING CALCULATION
// ============================================================

export function getDoorOpening(door) {
  const half = door.width / 2

  // ----------------------------------------------------------
  // Horizontal wall
  // ----------------------------------------------------------
  if (door.wallOrientation === 'horizontal') {
    return {
      wallZ: door.wallZ,

      openingStart:
        door.center.x -
        half -
        door.wallXStart,

      openingEnd:
        door.center.x +
        half -
        door.wallXStart,

      openingBottom: 0,

      openingTop: door.height
    }
  }

  // ----------------------------------------------------------
  // Vertical wall
  // ----------------------------------------------------------
  return {
    wallX: door.wallX,

    openingStart:
      door.center.z -
      half -
      door.wallZStart,

    openingEnd:
      door.center.z +
      half -
      door.wallZStart,

    openingBottom: 0,

    openingTop: door.height
  }
}


// ============================================================
// WINDOW OPENING CALCULATION
// ============================================================

export function getWindowOpening(windowData) {
  const half = windowData.width / 2

  // ----------------------------------------------------------
  // Horizontal wall
  // ----------------------------------------------------------
  if (windowData.wallOrientation === 'horizontal') {
    return {
      wallZ: windowData.wallZ,

      openingStart:
        windowData.center.x -
        half -
        windowData.wallXStart,

      openingEnd:
        windowData.center.x +
        half -
        windowData.wallXStart,

      openingBottom:
        windowData.sillHeight,

      openingTop:
        windowData.sillHeight +
        windowData.height
    }
  }

  // ----------------------------------------------------------
  // Vertical wall
  // ----------------------------------------------------------
  return {
    wallX: windowData.wallX,

    openingStart:
      windowData.center.z -
      half -
      windowData.wallZStart,

    openingEnd:
      windowData.center.z +
      half -
      windowData.wallZStart,

    openingBottom:
      windowData.sillHeight,

    openingTop:
      windowData.sillHeight +
      windowData.height
  }
}


// ============================================================
// NAVIGATION POSITIONS
// ============================================================

export function getNavigationPosition(roomId) {

  const positions = {

    // --------------------------------------------------------
    // Entrance / Hallway
    // --------------------------------------------------------
    entrance: {
      x: 0,
      z: 3.45
    },

    // --------------------------------------------------------
    // Bedroom 1
    // --------------------------------------------------------
    bedroom1: {
      x: -3.0,
      z: -2.2
    },

    // --------------------------------------------------------
    // Bedroom 2
    // --------------------------------------------------------
    bedroom2: {
      x: 3.0,
      z: -2.2
    },

    // --------------------------------------------------------
    // Kitchen
    // --------------------------------------------------------
    kitchen: {
      x: -3.0,
      z: 2.5
    },

    // --------------------------------------------------------
    // Bathroom
    // --------------------------------------------------------
    bathroom: {
      x: 3.0,
      z: 2.5
    },

    // --------------------------------------------------------
    // Main Balcony
    // --------------------------------------------------------
    balcony: {
      x: -1.2,
      z: -4.55
    },

    // --------------------------------------------------------
    // Balcony Room
    // --------------------------------------------------------
    balconyRoom: {
      x: 3.35,
      z: -4.45
    }
  }

  return positions[roomId] || positions.entrance
}
