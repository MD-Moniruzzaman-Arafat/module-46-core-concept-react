
import './App.css'

function App() {

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    console.log(e.target.name.value)
    console.log(e.target.email.value)
  }

  return (
    <>
      <h4>Form Submit</h4>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" id="" /><br />
        <input type="email" name="email" id="" /><br />
        <input type="submit" value="submit" />
      </form>
    </>
  )
}

export default App
