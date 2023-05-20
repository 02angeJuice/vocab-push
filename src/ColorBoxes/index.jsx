import React from 'react'
import ColorBox from './ColorBox'

const ColorBoxes = ({ colors }) => {
  const boxes = []
  for (let i = 0; i < 25; i++) {
    boxes.push(<ColorBox key={i} colors={colors} />)
  }

  return (
    <>
      <div className="flex flex-wrap max-w-xl">{boxes}</div>
    </>
  )
}

export default ColorBoxes
