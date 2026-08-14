import React from 'react'
import { FLOOR_PLAN, getNavigationPosition } from '../utils/floorPlanData'

function FloorPlanView({ onClose, onNavigate, currentRoom }) {
  const rooms = ['kitchen', 'bathroom', 'bedroom1', 'bedroom2', 'balcony']
  const positions = {
    kitchen: { left: '8%', top: '8%', width: '38%', height: '28%' },
    bathroom: { right: '8%', top: '8%', width: '38%', height: '28%' },
    bedroom1: { left: '8%', top: '38%', width: '38%', height: '38%' },
    bedroom2: { right: '8%', top: '38%', width: '38%', height: '38%' },
    balcony: { left: '14%', bottom: '4%', width: '72%', height: '11%' }
  }
  const navigate = (id) => {
    const pos = getNavigationPosition(id)
    onNavigate?.(id, pos.x, pos.z)
    onClose?.()
  }
  return <div role="dialog" aria-modal="true" style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(0,0,0,.92)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 18 }}>
    <div style={{ width: '100%', maxWidth: 760, display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, color: '#fff' }}>
      <div><div style={{ fontSize: 18, letterSpacing: 2, fontWeight: 300 }}>📐 FLOOR PLAN</div><div style={{ fontSize: 10, opacity: .35, marginTop: 4 }}>Select a room to navigate</div></div>
      <button onClick={onClose} aria-label="Close floor plan" style={{ padding: '9px 14px', borderRadius: 9, border: '1px solid rgba(255,255,255,.12)', background: 'rgba(255,255,255,.06)', color: '#fff', cursor: 'pointer' }}>✕ Close</button>
    </div>
    <div style={{ width: '100%', maxWidth: 760, aspectRatio: '5/4', position: 'relative', overflow: 'hidden', borderRadius: 14, border: '1px solid rgba(255,255,255,.1)', background: 'linear-gradient(145deg,#151522,#0b0b12)', boxShadow: '0 25px 80px rgba(0,0,0,.45)' }}>
      <div style={{ position: 'absolute', inset: '7%', border: '2px solid rgba(255,255,255,.14)', background: 'rgba(255,255,255,.015)' }}>
        {rooms.map(id => <button key={id} onClick={() => navigate(id)} aria-label={`Navigate to ${FLOOR_PLAN.rooms[id].label}`} style={{ position: 'absolute', ...positions[id], display: 'grid', placeItems: 'center', border: currentRoom === id ? '2px solid rgba(110,210,255,.75)' : '1px solid rgba(255,255,255,.12)', background: currentRoom === id ? 'rgba(100,200,255,.2)' : 'rgba(255,255,255,.045)', color: currentRoom === id ? '#fff' : 'rgba(255,255,255,.55)', cursor: 'pointer', borderRadius: 5, fontSize: 'clamp(10px, 1.8vw, 14px)' }}>{FLOOR_PLAN.rooms[id].label}</button>)}
        <div style={{ position: 'absolute', left: '47%', top: '37%', width: '6%', height: '42%', border: '1px dashed rgba(255,255,255,.1)' }} />
        <div style={{ position: 'absolute', left: '45%', top: '80%', width: '10%', height: '7%', display: 'grid', placeItems: 'center', color: 'rgba(255,255,255,.25)', fontSize: 9 }}>ENTRY</div>
      </div>
      <img src="/assets/floor-plan-reference.png" alt="Original residential floor plan reference" style={{ position: 'absolute', right: 10, top: 10, width: 100, height: 80, objectFit: 'cover', opacity: .22, borderRadius: 6, border: '1px solid rgba(255,255,255,.08)' }} />
    </div>
  </div>
}

export default FloorPlanView
