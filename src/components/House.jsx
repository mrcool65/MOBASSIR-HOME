import React from 'react'
import Walls from './Walls'
import Floor from './Floor'
import Ceiling from './Ceiling'
import Doors from './Doors'
import Windows from './Windows'
import Furniture from './Furniture'

function House({ ceilingHidden, isNight, currentRoom }) {
  return <group>
    <Floor />
    <Walls />
    <Ceiling hidden={ceilingHidden} />
    <Doors />
    <Windows isNight={isNight} />
    <Furniture currentRoom={currentRoom} />
  </group>
}

export default House
