import React from 'react'

const Heading = ({ color = 'olive', fontSize = '10px', text = 'hello' }) => {
  return <h1 style={{ color: color, fontSize }}>{text}</h1>
}

export default Heading
