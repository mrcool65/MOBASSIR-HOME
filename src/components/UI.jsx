import React from 'react'

function UI({ cameraMode, setCameraMode, ceilingHidden, setCeilingHidden, isNight, setIsNight, setShowFloorPlan, setShowMinimap, showMinimap, onResetView }) {
  const button = (active = false) => ({
    padding: '8px 13px', margin: 3, borderRadius: 20,
    border: `1px solid ${active ? 'rgba(100,180,255,.55)' : 'rgba(255,255,255,.14)'}`,
    background: active ? 'rgba(80,150,255,.2)' : 'rgba(0,0,0,.38)', color: '#fff',
    fontSize: 12, cursor: 'pointer', backdropFilter: 'blur(12px)', fontWeight: 500,
    minHeight: 36, touchAction: 'manipulation'
  })
  return <>
    <div style={{ position: 'fixed', top: 'max(10px, env(safe-area-inset-top))', left: '50%', transform: 'translateX(-50%)', zIndex: 60, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '96%', padding: '7px 9px', borderRadius: 16, background: 'rgba(0,0,0,.5)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,.06)' }}>
      <button style={button(cameraMode === 'walk')} onClick={() => setCameraMode('walk')}>🚶 Walk</button>
      <button style={button(cameraMode === 'orbit')} onClick={() => setCameraMode('orbit')}>🔄 Orbit</button>
      <button style={button()} onClick={() => setCeilingHidden(v => !v)}>{ceilingHidden ? '🏠 Show' : '🏠 Hide'} Ceiling</button>
      <button style={button()} onClick={() => setIsNight(v => !v)}>{isNight ? '☀️ Day' : '🌙 Night'}</button>
      <button style={button()} onClick={() => setShowFloorPlan(true)}>📐 Plan</button>
      <button style={button(showMinimap)} onClick={() => setShowMinimap(v => !v)}>🗺️</button>
      <button style={button()} onClick={onResetView}>↺ Reset</button>
    </div>
    <div style={{ position: 'fixed', top: 74, left: '50%', transform: 'translateX(-50%)', zIndex: 35, color: 'rgba(255,255,255,.18)', fontSize: 10, letterSpacing: 4, pointerEvents: 'none' }}>MOBASSIR HOME</div>
  </>
}

export default UI
