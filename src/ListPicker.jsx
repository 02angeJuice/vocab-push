import React from 'react'

export const ListPicker = ({ test }) => {
  const randomRange = Math.floor(Math.random() * test.length)
  const randomElement = test[randomRange]

  console.log(test)
  console.log(typeof test)
  return (
    <div>
      <p>The list of values: {randomElement}</p>
    </div>
  )
}
