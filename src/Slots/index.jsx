import React from 'react'

const spinning = (items) => {
  return Math.floor(Math.random() * items.length)
}

const index = ({ items }) => {
  let slot1 = items[spinning(items)]
  let slot2 = items[spinning(items)]
  let slot3 = items[spinning(items)]

  let isWin = slot1 === slot2 && slot1 === slot3

  return (
    <div>
      <h1>
        {slot1} {slot2} {slot3}
      </h1>
      <h2 style={{ color: isWin ? 'green' : 'red' }}>
        {isWin ? 'You win!' : 'You lose!'}
      </h2>
      {isWin && <h3>Congrats!!!</h3>}
    </div>
  )
}

export default index
