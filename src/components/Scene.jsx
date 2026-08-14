import React from 'react'
import House from './House'
import WalkControls from './WalkControls'

function Scene({
  ceilingHidden,
  isNight,
  currentRoom,
  cameraMode,
  inputRef,
  lookRef,
  isTeleporting,
  teleportRequest,
  onTeleportComplete,
  onPlayerPosition
}) {
  return (
    <>
      <WalkControls
        mode={cameraMode}
        inputRef={inputRef}
        lookRef={lookRef}
        isTeleporting={isTeleporting}
        teleportRequest={teleportRequest}
        onTeleportComplete={onTeleportComplete}
        onPlayerPosition={onPlayerPosition}
      />
      <House
        ceilingHidden={ceilingHidden}
        isNight={isNight}
        currentRoom={currentRoom}
      />
    </>
  )
}

export default Scene
