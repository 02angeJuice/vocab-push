import React from 'react'

const Property = ({ name, rating, price }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>${price} a round</h3>
      <h4>{rating}⭐</h4>
      <hr />
    </div>
  )
}

export default Property

// { _id: 25, name: 'Jojo', rating: 7.5, price: 180 },
// { _id: 26, name: 'Doraemon', rating: 8, price: 200 },
