import { useState } from 'react'

const Couter = () => {
  const [num, setNum] = useState(5)

  const incrementNum = () => {
    setNum(num + 1)
  }
  return (
    <div>
      <p>The count is: {num}</p>
      <button
        onClick={incrementNum}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add
      </button>
    </div>
  )
}

export default Couter
