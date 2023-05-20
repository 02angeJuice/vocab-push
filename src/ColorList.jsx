import React from 'react'

const ColorList = ({ colors }) => {
  return (
    <div>
      <p>Color List</p>
      <ul>
        {colors?.map((e) => (
          <li key={e} style={{ color: e, fontSize: '60px' }}>
            {e}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ColorList
