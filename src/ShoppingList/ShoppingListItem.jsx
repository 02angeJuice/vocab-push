import React from 'react'
import PropTypes from 'prop-types'

const ShoppingListItem = ({ item, qty, completed }) => {
  const styles = {
    color: completed ? 'magenta' : 'gray',
    textDecoration: !completed ? 'line-through' : null,
  }

  return (
    <div>
      <li style={styles}>
        {item} - {qty} - {completed ? 'true' : 'false'}
      </li>
    </div>
  )
}

ShoppingListItem.propTypes = {
  item: PropTypes.string,
  qty: PropTypes.number,
  completed: PropTypes.bool,
}

export default ShoppingListItem
