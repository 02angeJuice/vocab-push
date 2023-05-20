import React from 'react'

const Die = ({ size }) => {
  const roll = Math.floor(Math.random() * (size ? size : 20)) + 1
  return <div>Die: {roll}</div>
}

export default Die
