import { useState } from 'react'

const Toggler = () => {
  const [curr, setCurr] = useState(true)
  const toggleEmoji = () => setCurr(!curr)

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
        {curr ? '🙂' : '😆'}
      </p>
      <button
        onClick={toggleEmoji}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Toggle
      </button>
    </div>
  )
}

export default Toggler
