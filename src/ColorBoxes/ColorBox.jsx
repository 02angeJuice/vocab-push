import React, { useState } from 'react'
import './ColorBoxes.css'

const getColor = (arr) => arr[Math.floor(Math.random() * arr.length)]

const ColorBox = ({ colors }) => {
  const [color, setColor] = useState(getColor(colors))
  const changeColor = () => setColor(getColor(colors))

  return (
    <div>
      <div
        onMouseOver={changeColor}
        className="flex-auto w-28 h-28"
        style={{ backgroundColor: color }}></div>
    </div>
  )
}

// const ColorBox = ({ colors }) => {
//   const ranNumber = () => Math.floor(Math.random() * colors.length)

//   const [color, setColor] = useState(ranNumber(colors))
//   const colorGenerator = () => setColor(ranNumber(colors))

//   return (
//     <div>
//       <div
//         onMouseOver={colorGenerator}
//         className="box"
//         style={{ backgroundColor: colors[color] }}></div>
//     </div>
//   )
// }

export default ColorBox
