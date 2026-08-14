import React from 'react'
import { FLOOR_PLAN, getNavigationPosition } from '../utils/floorPlanData'

function RoomNavigation({ onNavigate, currentRoom }) {
  const rooms = ['bedroom1', 'bedroom2', 'kitchen', 'bathroom', 'balcony']
  const icons = { bedroom1: '🛏️', bedroom2: '🛏️', kitchen: '🍳', bathroom: '🚿', balcony: '🌿' }
  return <div style={{ position: 'fixed', bottom: 'max(176px, calc(176px + env(safe-area-inset-bottom)))', left: '50%', transform: 'translateX(-50%)', zIndex: 40, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4, maxWidth: '96%', padding: '8px 10px', borderRadius: 16, background: 'rgba(0,0,0,.42)', backdropFilter: 'blur(18px)', border: '1px solid rgba(255,255,255,.06)' }}>
    {rooms.map(id => {
      const active = currentRoom === id
      const pos = getNavigationPosition(id)
      return <button key={id} onClick={() => onNavigate?.(id, pos.x, pos.z)} style={{ padding: '8px 12px', borderRadius: 18, border: `1px solid ${active ? 'rgba(100,200,255,.6)' : 'rgba(255,255,255,.12)'}`, background: active ? 'rgba(100,200,255,.2)' : 'rgba(0,0,0,.25)', color: active ? '#fff' : 'rgba(255,255,255,.72)', fontSize: 12, cursor: 'pointer', minHeight: 34 }}>
        {icons[id]} {FLOOR_PLAN.rooms[id].label.replace('Bedroom ', 'Bed ')}
      </button>
    })}
  </div>
}

export default RoomNavigation
