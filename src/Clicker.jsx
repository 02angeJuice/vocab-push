const handleChange = (e) => {
  console.log(e.target.value)
}

const Clicker = ({ message, buttonText }) => {
  const handleClick = () => {
    console.log(message)
  }

  return (
    <div>
      <p>Click The Button</p>
      <p onMouseOver={(e) => handleChange(e)}>Hover Over Me</p>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {buttonText}
      </button>
    </div>
  )
}

export default Clicker
