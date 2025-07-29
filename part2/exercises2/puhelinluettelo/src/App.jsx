import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', newName)
    const names = persons.map(person => person.name)
    console.log('names', names);
    const personObject = {
      name: newName
    }
    const nameExist = names.includes(newName)
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log('value changed', event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, name) => (
          <li key={name}>{person.name}</li>
        ))}
      </ul>
    </div>
  )

}

export default App