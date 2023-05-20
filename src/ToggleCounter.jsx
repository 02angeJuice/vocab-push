import { useState } from 'react'

const ToggleCounter = () => {
  const [curr, setCurr] = useState(true)
  const [count, setCount] = useState(0)

  console.log('count above SET', count)

  const toggleEmoji = () => {
    // console.log('=======')

    // console.log(curr)
    setCurr(!curr)
    setCount(count + 1)

    console.log('SetCount has run!!')
    console.log(count)
  }

  return (
    <div>
      <p
        className="disable-highlight"
        onClick={toggleEmoji}
        style={{
          fontSize: '60px',
          cursor: 'pointer',
          outline: 'none !important',
        }}>
        {count % 5 === 0 ? '😆' : '🙂'}
      </p>
      <p>{count}</p>
      <button
        onClick={toggleEmoji}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Toggle
      </button>
    </div>
  )
}

export default ToggleCounter
