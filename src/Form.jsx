const handleFormSubmit = (e) => {
  console.log('dsd')

  e.preventDefault()
}

const Form = () => {
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form
