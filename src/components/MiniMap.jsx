import React, { useMemo } from 'react'
import { FLOOR_PLAN } from '../utils/floorPlanData'

function MiniMap({ currentRoom, playerPosition = { x: 0, z: 0 } }) {
  const { rooms } = FLOOR_PLAN
  const mapRooms = useMemo(() => Object.entries(rooms).filter(([key]) => !['entrance'].includes(key)), [rooms])
  const mapX = (x) => ((x + 5) / 10) * 100
  const mapZ = (z) => (1 - ((z + 5) / 10)) * 100
  return <div style={{ position: 'fixed', bottom: 240, right: 15, zIndex: 45, width: 150, height: 124, padding: 7, borderRadius: 12, background: 'rgba(0,0,0,.68)', backdropFilter: 'blur(15px)', border: '1px solid rgba(255,255,255,.1)' }}>
    <div style={{ position: 'relative', width: '100%', height: '100%', background: 'rgba(20,20,30,.55)', borderRadius: 7, overflow: 'hidden' }}>
      {mapRooms.map(([key, room]) => <div key={key} style={{ position: 'absolute', left: `${mapX(room.minX)}%`, top: `${mapZ(room.maxZ)}%`, width: `${((room.maxX - room.minX) / 10) * 100}%`, height: `${((room.maxZ - room.minZ) / 10) * 100}%`, background: key === currentRoom ? 'rgba(100,200,255,.24)' : 'rgba(255,255,255,.05)', border: `1px solid ${key === currentRoom ? 'rgba(100,200,255,.55)' : 'rgba(255,255,255,.08)'}` }} />)}
      <div style={{ position: 'absolute', left: `${mapX(playerPosition.x)}%`, top: `${mapZ(playerPosition.z)}%`, width: 8, height: 8, borderRadius: '50%', background: '#8dd7ff', boxShadow: '0 0 12px rgba(100,200,255,.8)', transform: 'translate(-50%,-50%)' }} />
    </div>
    <div style={{ position: 'absolute', bottom: 3, left: 0, right: 0, textAlign: 'center', color: 'rgba(255,255,255,.45)', fontSize: 8, letterSpacing: 1, textTransform: 'uppercase' }}>{currentRoom || 'Entrance'}</div>
  </div>
}

export default MiniMap
