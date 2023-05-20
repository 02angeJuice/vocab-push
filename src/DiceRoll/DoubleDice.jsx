import React from 'react'

const DoubleDice = () => {
  const num1 = Math.floor(Math.random() * 3) + 1
  const num2 = Math.floor(Math.random() * 3) + 1
  const isWinner = num1 === num2
  const styles = { color: isWinner ? 'green' : 'red', fontSize: '40px' }

  return (
    <div className="DoubleDice" style={styles}>
      {/* {num1 === num2 ? <h1>You Win!</h1> : null} */}
      <h1>Double Dice</h1>
      {isWinner && <h3>You Win!</h3>}
      <p>Num1: {num1}</p>
      <p>Num2: {num2}</p>
    </div>
  )
}

export default DoubleDice
