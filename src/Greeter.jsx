import React from 'react'

const Greeter = ({ name = 'Everyone', fruit, from = 'Annonymouse' }) => {
  console.log(fruit)
  return (
    <div>
      Greeter: {name} {from ? `, from: ${from}` : ''}
      <ul>
        {fruit?.map((title) => {
          return <li key={title}>{title}</li>
        })}
      </ul>
    </div>
  )
}
export default Greeter
