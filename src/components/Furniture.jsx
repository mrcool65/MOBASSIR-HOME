import React from 'react'

function Furniture({ currentRoom }) {
  const roomOpacity = (room) => currentRoom && currentRoom !== room ? 0.96 : 1
  const Bed = ({ position, rotation, room }) => <group position={position} rotation={rotation}>
    <mesh position={[0, 0.4, 0]}><boxGeometry args={[1.8, 0.8, 2.2]} /><meshStandardMaterial color="#4a3a2a" roughness={0.8} transparent opacity={roomOpacity(room)} /></mesh>
    <mesh position={[0, 0.8, 0]}><boxGeometry args={[1.7, 0.3, 2.1]} /><meshStandardMaterial color="#7a6a5a" roughness={0.9} /></mesh>
    <mesh position={[0, 1, 0.8]}><boxGeometry args={[0.6, 0.15, 0.4]} /><meshStandardMaterial color="#8a7a6a" roughness={0.9} /></mesh>
  </group>
  const Wardrobe = ({ position, rotation }) => <mesh position={position} rotation={rotation}><boxGeometry args={[1, 2.2, 0.6]} /><meshStandardMaterial color="#6a5a4a" roughness={0.7} /></mesh>
  const Table = ({ position, rotation }) => <group position={position} rotation={rotation}>
    <mesh position={[0, 0.4, 0]}><boxGeometry args={[0.6, 0.05, 0.4]} /><meshStandardMaterial color="#8a7a6a" roughness={0.6} /></mesh>
    {[-0.25, 0.25].flatMap(x => [-0.15, 0.15].map(z => <mesh key={`${x}-${z}`} position={[x, 0.1, z]}><boxGeometry args={[0.05, 0.3, 0.05]} /><meshStandardMaterial color="#6a5a4a" roughness={0.7} /></mesh>))}
  </group>
  const KitchenCounter = ({ position, rotation }) => <mesh position={position} rotation={rotation}><boxGeometry args={[2, 0.9, 0.6]} /><meshStandardMaterial color="#7a8a7a" roughness={0.4} metalness={0.3} /></mesh>
  const Fridge = ({ position, rotation }) => <mesh position={position} rotation={rotation}><boxGeometry args={[0.6, 1.8, 0.6]} /><meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.5} /></mesh>
  const Toilet = ({ position, rotation }) => <group position={position} rotation={rotation}><mesh position={[0, 0.3, 0]}><boxGeometry args={[0.5, 0.4, 0.7]} /><meshStandardMaterial color="#e8e0d8" roughness={0.5} /></mesh><mesh position={[0, 0.6, 0.2]}><boxGeometry args={[0.3, 0.3, 0.3]} /><meshStandardMaterial color="#e8e0d8" roughness={0.5} /></mesh></group>
  const Sink = ({ position, rotation }) => <mesh position={position} rotation={rotation}><boxGeometry args={[0.6, 0.2, 0.4]} /><meshStandardMaterial color="#c8c0b8" roughness={0.3} metalness={0.4} /></mesh>
  const Chair = ({ position, rotation }) => <mesh position={position} rotation={rotation}><boxGeometry args={[0.4, 0.4, 0.4]} /><meshStandardMaterial color="#5a4a3a" roughness={0.7} /></mesh>

  return <group>
    <Bed room="bedroom1" position={[-2.5, 0, -2]} rotation={[0, 0, 0]} />
    <Wardrobe position={[-4.5, 0, -1]} rotation={[0, 0, 0]} />
    <Table position={[-1.5, 0, -1]} rotation={[0, 0, 0]} />
    <Bed room="bedroom2" position={[2.5, 0, -2]} rotation={[0, Math.PI, 0]} />
    <Wardrobe position={[4.5, 0, -1]} rotation={[0, Math.PI, 0]} />
    <Table position={[1.5, 0, -1]} rotation={[0, 0, 0]} />
    <KitchenCounter position={[-3.5, 0, 3.5]} rotation={[0, Math.PI / 2, 0]} />
    <Fridge position={[-1.5, 0, 3.5]} rotation={[0, 0, 0]} />
    <Sink position={[-4.5, 0, 3.5]} rotation={[0, 0, 0]} />
    <Toilet position={[2.5, 0, 3.5]} rotation={[0, 0, 0]} />
    <Sink position={[3.5, 0, 3.5]} rotation={[0, 0, 0]} />
    <Chair position={[-1, 0, -4.45]} rotation={[0, 0.5, 0]} />
    <Chair position={[1, 0, -4.45]} rotation={[0, -0.5, 0]} />
    <Table position={[0, 0, -4.7]} rotation={[0, 0, 0]} />
  </group>
}

export default Furniture
