import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterBy, setFilter] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', newName)
    const names = persons.map(person => person.name)
    console.log('names', names);
    const personObject = {
      name: newName,
      number: newNumber
    }
    const nameExist = names.includes(newName)
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    console.log('value changed', event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log('value changed', event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log('filter changed', event.target.value)
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterBy={filterBy} handleFilterChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm 
        newName={newName} 
        newNumber={newNumber} 
        handleNameChange={handleNameChange} 
        handleNumberChange={handleNumberChange} 
        addName={addName}
      />
      <h2>Numbers</h2>
      <Numbers persons={persons} filterBy={filterBy} />
    </div>
  )

}

const Filter = ({ filterBy, handleFilterChange }) => {
  return (
    <div>
      filter shown with <input value={filterBy} onChange={handleFilterChange} />
    </div>
  )
}

const PersonForm = ({ newName, newNumber, handleNameChange, handleNumberChange, addName }) => {
  return (
    <form onSubmit={addName}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const Numbers = ({ persons, filterBy }) => {
  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filterBy.toLowerCase()))
  return (
    <ul>
      {filteredPersons.map(person => 
        <li key={person.name}>
          {person.name} {person.number}
        </li>
      )}
    </ul>
  )
}

export default App