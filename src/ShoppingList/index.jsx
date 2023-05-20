import React from 'react'
import ShoppingListItem from './ShoppingListItem'

const ShoppingList = ({ items }) => {
  return (
    <ul>
      {items?.map((i) => (
        // <ShoppingListItem
        //   key={i._id}
        //   item={i.item}
        //   qty={i.qty}
        //   completed={i.completed}
        // />

        <ShoppingListItem key={i._id} {...i} />
      ))}
    </ul>
  )
}

export default ShoppingList
