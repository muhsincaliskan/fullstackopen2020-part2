import React, { useState, useEffect } from 'react'
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import Notification from "./Notification";
import personService from './services/personsService'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [notificationMessage, setNotificationMessage] = useState({ type: null, message: '' })
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }
  const addPerson = (event) => {
    event.preventDefault()

    const isExist = persons.filter(person => person.name.toLowerCase() === newName.toLowerCase()).length

    if (isExist) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with new one`)) {
        const personToUpdate = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
        personService
          .update(personToUpdate.id, { ...personToUpdate, number: newNumber })
          .then(updatedData => {
            setPersons(persons.map(person => person.id !== personToUpdate.id ? person : updatedData))
          })
          .catch(err => {
            setNotificationMessage(
              {
                type: "error",
                message: `Person '${newName}' was already deleted from server`
              }
            )
            setTimeout(() => {
              setNotificationMessage({ type: null, message: '' })
            }, 5000)
            setPersons(persons.filter(n => n.id !== personToUpdate.id))
          })
        setNotificationMessage({ type: "success", message: `Person Updated` })
        setTimeout(() => {
          setNotificationMessage({ type: null, message: '' })
        }, 5000)
      }
    }
    else {
      if (newName === '' || newNumber === '')
        return alert(
          `Name and Number can not be empty! `
        )
      const personObject = {
        name: newName,
        number: newNumber,
        id: ++persons.length
      }
      personService.create(personObject).then(updatedData => {
        setPersons(persons.concat(updatedData))
      }).catch(err => {
        setNotificationMessage(
          { type: "error", message: `This id already exists.` }
        )
        setTimeout(() => {
          setNotificationMessage({ type: null, message: '' })
        }, 5000)
      })
      setNotificationMessage({ type: "success", message: `Added '${newName}'` })
      setTimeout(() => {
        setNotificationMessage({ type: null, message: '' })
      }, 5000)
      setNewName('')
      setNewNumber('')
    }
  }
  const handleDelete = (person) => {

    if (window.confirm(`Delete ${person.name} ?`)) {
      personService.deletePerson(person.id)
        .then(updatedData => { setPersons(persons.filter(n => n.id !== person.id)) })
        .catch(err => alert("Already Deleted."))
      setNotificationMessage(
        {
          type: "success",
          message: `Deleted '${person.name}'`
        }
      )
      setTimeout(() => {
        setNotificationMessage({ type: null, message: null })
      }, 5000)
    }
  }

  useEffect(() => {
    personService.getAll()
      .then(personsData => {
        setPersons(personsData)
      })
  }, [])

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage.message} type={notificationMessage.type} />
      <Filter value={newFilter} handleFilterChange={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        name={newName} handleNameChange={handleNameChange}
        number={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} handleDelete={handleDelete} />
    </div>
  )
}



export default App