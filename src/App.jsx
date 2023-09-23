
import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [error, setError] = useState('');


  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // console.log(e)
    // console.log(e.target.name.value)
    // console.log(e.target.email.value)

    if (name === 'arafat' && email === 'arafat@gmail.com') {
      setError('Match');
      console.log(name, email)

    } else {
      setError('No Match');
    }
  }

  return (
    <>
      <h4>Form Submit</h4>
      <form onSubmit={handleFormSubmit}>
        <input onChange={handleName} type="text" name="name" id="" /><br />
        <input onChange={handleEmail} type="email" name="email" id="" /><br />
        <input type="submit" value="submit" />
      </form>
      {
        // error && <p>{error}</p>

        error === 'Match' ? <p style={{ color: 'green' }}>{error}</p> : <p style={{ color: 'red' }}>{error}</p>
      }
    </>
  )
}

export default App
