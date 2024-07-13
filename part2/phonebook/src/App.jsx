import { useState, useEffect } from 'react'
import axios from 'axios'

import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";


const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    // console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        // console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  // console.log('render', persons.length, 'persons')

  const addPerson = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
    };

    if (persons.find((person) => person.name === nameObject.name)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(nameObject));
    }
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  const getFilteredPersons = () => {
    if (!newFilter) return persons;
    return persons.filter(
      (person) => person.name.toLowerCase() === newFilter.toLowerCase()
    );
  };

  const filteredPersons = getFilteredPersons();

  return (
    <div>
      <h2>Phone book</h2>
      <Filter filter={handleFilterChange} newFilter={newFilter} />
      <h2>add a new</h2>
      <PersonForm
        add={addPerson}
        handleName={handleNameChange}
        handleNumber={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons filtered={filteredPersons}/>
    </div>
  );
};

export default App;
