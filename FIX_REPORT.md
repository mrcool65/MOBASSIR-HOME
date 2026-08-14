# MOBASSIR HOME — Repair Report

## Repaired
- Normal Vite/React folder structure restored.
- Broken flattened filenames corrected.
- R3F-only hooks moved out of the DOM mobile UI and kept inside the Canvas controller.
- Camera is now obtained with `useThree()` inside `WalkControls`.
- Teleport animation moved into the R3F controller.
- Player position updates are throttled and thresholded instead of updating React state every frame.
- Door animation now uses a ref for the animated angle instead of React state every frame.
- Wall-based collision replaces room-union collision logic.
- Floor-plan coordinates and balcony geometry were normalized.
- Window wall coordinates now match the exterior wall positions.
- Minimap room geometry is derived from `FLOOR_PLAN` instead of a second hardcoded room map.
- Mobile joystick and touch-look use refs/pointer events and do not require R3F hooks in the DOM component.
- Terser-only build configuration was removed; Vite's default esbuild minifier is used.
- Accessibility focus behavior was restored.
- The supplied floor-plan image is included as `public/assets/floor-plan-reference.png`.

## Verification
- Relative imports were checked and all resolve to files in the repaired project.
- `package.json` parses successfully.
- `vite.config.js` parses with Node.
- `src/utils/floorPlanData.js` parses with Node.
- A full `npm install`/`npm run build` could not be completed in this environment because the npm registry was not reachable and the required packages were not cached locally.

Therefore the archive is a repaired source package, but a real browser/runtime test should still be run after `npm install` on a machine with npm registry access.
