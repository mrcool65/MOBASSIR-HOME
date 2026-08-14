import React from 'react'

function LoadingScreen() {
  return <div style={{ position: 'fixed', inset: 0, background: 'radial-gradient(circle at 50% 45%, #1a1a32, #07070e 70%)', display: 'grid', placeItems: 'center', zIndex: 1000, color: '#fff' }}>
    <div style={{ width: 'min(420px, 82vw)', textAlign: 'center' }}>
      <div style={{ fontSize: 'clamp(2.2rem, 8vw, 3.5rem)', fontWeight: 200, letterSpacing: '0.28em' }}>MOBASSIR</div>
      <div style={{ fontSize: 'clamp(1.1rem, 4vw, 1.7rem)', fontWeight: 200, letterSpacing: '0.55em', opacity: 0.35, marginTop: -6 }}>HOME</div>
      <div style={{ marginTop: 18, fontSize: 10, letterSpacing: '0.35em', opacity: 0.28 }}>INITIALIZING 3D SPACE</div>
      <div style={{ marginTop: 28, height: 3, borderRadius: 99, background: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
        <div style={{ width: '55%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(130,200,255,.85), transparent)', animation: 'load 1.2s ease-in-out infinite' }} />
      </div>
      <style>{`@keyframes load { 0% { transform: translateX(-120%); } 100% { transform: translateX(220%); } }`}</style>
    </div>
  </div>
}

export default LoadingScreen
