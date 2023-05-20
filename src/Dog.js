import React from 'react'

function Dog() {
  const pet = 'baby'

  return <div>{pet} Dog</div>
}

function add(x, y) {
  return x + y
}

export { Dog as Animal, add }
