import React, { Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import * as THREE from 'three'
import Scene from './components/Scene'
import UI from './components/UI'
import LoadingScreen from './components/LoadingScreen'
import MobileControls from './components/MobileControls'
import RoomNavigation from './components/RoomNavigation'
import MiniMap from './components/MiniMap'
import FloorPlanView from './components/FloorPlanView'
import OrbitControlsWrapper from './components/OrbitControlsWrapper'
import { FLOOR_PLAN } from './utils/floorPlanData'

function App() {
  const [loading, setLoading] = useState(true)
  const [cameraMode, setCameraMode] = useState('walk')
  const [ceilingHidden, setCeilingHidden] = useState(false)
  const [isNight, setIsNight] = useState(false)
  const [showFloorPlan, setShowFloorPlan] = useState(false)
  const [showMinimap, setShowMinimap] = useState(true)
  const [currentRoom, setCurrentRoom] = useState('entrance')
  const [playerPosition, setPlayerPosition] = useState({ x: 0, z: 3.45 })
  const [isTeleporting, setIsTeleporting] = useState(false)
  const [cameraTarget, setCameraTarget] = useState([0, 1.6, 3.45])
  const [teleportRequest, setTeleportRequest] = useState(null)

  const inputRef = useRef({ moveX: 0, moveY: 0 })
  const lookRef = useRef({ x: 0, y: 0 })

  const getRoomAtPosition = useCallback((x, z) => {
    for (const [key, room] of Object.entries(FLOOR_PLAN.rooms)) {
      if (x >= room.minX && x <= room.maxX && z >= room.minZ && z <= room.maxZ) return key
    }
    return 'entrance'
  }, [])

  const handlePlayerPosition = useCallback((x, z) => {
    setPlayerPosition(prev => (Math.hypot(prev.x - x, prev.z - z) < 0.035 ? prev : { x, z }))
    setCurrentRoom(prev => {
      const next = getRoomAtPosition(x, z)
      return prev === next ? prev : next
    })
  }, [getRoomAtPosition])

  const handleRoomNavigate = useCallback((roomId, x, z) => {
    if (isTeleporting) return
    setCurrentRoom(roomId)
    setCameraTarget([x, 1.6, z])
    setTeleportRequest({ id: `${roomId}-${Date.now()}`, roomId, x, z })
    setIsTeleporting(true)
  }, [isTeleporting])

  const handleTeleportComplete = useCallback(() => {
    setIsTeleporting(false)
    setTeleportRequest(null)
  }, [])

  const handleResetView = useCallback(() => {
    handleRoomNavigate('entrance', 0, 3.45)
  }, [handleRoomNavigate])

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 700)
    return () => window.clearTimeout(timer)
  }, [])

  if (loading) return <LoadingScreen />

  return <div style={{ width: '100%', height: '100%', position: 'relative', background: '#0a0a12' }}>
    <Canvas
      shadows
      camera={{ position: [0, 1.6, 3.45], fov: 70, near: 0.05, far: 100 }}
      dpr={[1, Math.min(1.75, window.devicePixelRatio || 1)]}
      gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      onCreated={({ camera }) => { camera.rotation.order = 'YXZ' }}
    >
      <color attach="background" args={['#1a1a2e']} />
      <ambientLight intensity={isNight ? 0.14 : 0.42} />
      <directionalLight position={[10, 20, 10]} intensity={isNight ? 0.22 : 1.15} castShadow shadow-mapSize-width={768} shadow-mapSize-height={768} />
      <Environment preset="studio" />
      <OrbitControlsWrapper mode={cameraMode} target={cameraTarget} />
      <Suspense fallback={null}>
        <Scene
          ceilingHidden={ceilingHidden}
          isNight={isNight}
          currentRoom={currentRoom}
          cameraMode={cameraMode}
          inputRef={inputRef}
          lookRef={lookRef}
          isTeleporting={isTeleporting}
          teleportRequest={teleportRequest}
          onTeleportComplete={handleTeleportComplete}
          onPlayerPosition={handlePlayerPosition}
        />
      </Suspense>
    </Canvas>

    <UI
      cameraMode={cameraMode}
      setCameraMode={setCameraMode}
      ceilingHidden={ceilingHidden}
      setCeilingHidden={setCeilingHidden}
      isNight={isNight}
      setIsNight={setIsNight}
      setShowFloorPlan={setShowFloorPlan}
      setShowMinimap={setShowMinimap}
      showMinimap={showMinimap}
      onResetView={handleResetView}
    />

    <MobileControls cameraMode={cameraMode} isTeleporting={isTeleporting} inputRef={inputRef} lookRef={lookRef} />

    <RoomNavigation onNavigate={handleRoomNavigate} currentRoom={currentRoom} />

    {showMinimap && <MiniMap currentRoom={currentRoom} playerPosition={playerPosition} />}

    {showFloorPlan && <FloorPlanView onClose={() => setShowFloorPlan(false)} onNavigate={handleRoomNavigate} currentRoom={currentRoom} />}
  </div>
}

export default App
