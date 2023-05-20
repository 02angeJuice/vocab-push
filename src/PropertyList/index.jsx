import React from 'react'
import Property from './Property'

const PropertyList = ({ props }) => {
  return (
    <div>
      {props?.map((p) => (
        <Property key={p._id} {...p} />
      ))}
    </div>
  )
}

// { _id: 25, name: 'Jojo', rating: 7.5, price: 180 },
// { _id: 26, name: 'Doraemon', rating: 8, price: 200 },

export default PropertyList
