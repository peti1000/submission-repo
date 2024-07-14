import {useState, useEffect} from 'react'
import personService from './services/persons.js'

import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";

const App = () => {
    const [persons, setPersons] = useState([]);

    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [newFilter, setNewFilter] = useState("");

    useEffect(() => {
        personService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
    }, [])

    const addPerson = (event) => {
        event.preventDefault();
        const nameObject = {
            name: newName,
            number: newNumber,
        };

        if (persons.find((person) => person.name === nameObject.name)) {
            alert(`${newName} is already added to phonebook`);
        } else {
            personService
                .create(nameObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setNewName('')
                    setNewNumber('')
                })
        }
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

    const removePerson = person => {
        if (window.confirm(`Delete ${person.name}?`)) {
            personService
                .remove(person.id)
                .then(() => setPersons(persons.filter(p => p.id !== person.id)))
        }
    }

    const filteredPersons = getFilteredPersons();

    return (
        <div>
            <h2>Phone book</h2>
            <Filter filter={handleFilterChange} newFilter={newFilter}/>
            <h2>add a new</h2>
            <PersonForm
                add={addPerson}
                handleName={handleNameChange}
                handleNumber={handleNumberChange}
                newName={newName}
                newNumber={newNumber}
            />
            <h2>Numbers</h2>
            <Persons filtered={filteredPersons} removePerson={removePerson}/>
        </div>
    );
};

export default App;
