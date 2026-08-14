# MOBASSIR HOME — Fixed Build

This package is a repaired version of the uploaded MOBASSIR HOME React + Three.js prototype.

## Main repairs

- Restored the normal Vite `src/` folder structure.
- Fixed R3F hook usage by keeping `useThree/useFrame` inside `<Canvas>`.
- Reworked desktop/mobile movement into a single camera controller.
- Removed per-frame React state updates for player movement and door animation.
- Reworked collision around actual wall segments and door openings.
- Unified navigation and room coordinates through `floorPlanData.js`.
- Fixed the balcony geometry so it connects to the house through the balcony door.
- Fixed window coordinates so wall opening detection can match the wall.
- Removed the unnecessary Terser build dependency/configuration.
- Improved responsive mobile input and keyboard accessibility.
- Made the minimap derive room rectangles from the floor-plan data.
- Included the uploaded floor-plan reference image under `public/assets/`.

## Install

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Important

The project still uses primitive Three.js furniture rather than external GLB/GLTF assets. That is intentional: the repair focuses first on stability, navigation, collision, architecture and performance. Realistic assets/materials can be added after this foundation is stable.
