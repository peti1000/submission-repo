import {useState, useEffect} from 'react'
import personService from './services/persons.js'

import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import Notification from "./components/Notification.jsx";

const App = () => {
    const [persons, setPersons] = useState([]);

    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [newFilter, setNewFilter] = useState("");
    const [message, setMessage] = useState(null)

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

            if (window.confirm(`${nameObject.name} is already added to phonebook, replace the old number with a new one?`)) {
                const updatePerson = persons.find(p => p.name === newName)
                const updatedPerson = {...updatePerson, number: newNumber}

                personService
                    .update(updatedPerson.id, updatedPerson)
                    .then(() => {
                        setPersons(persons.map(p => p.name === newName ? updatedPerson : p))
                        setNewName('')
                        setNewNumber('')
                        showMessage(`${updatedPerson.name}'s number is updated`)
                    })
            } else {
                setNewName('')
                setNewNumber('')
            }

        } else {
            personService
                .create(nameObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setNewName('')
                    setNewNumber('')
                    showMessage(`Added ${nameObject.name}`)
                })
        }
    };

    const showMessage = (message) => {
        setMessage(message);

        setTimeout(() => {
            setMessage(null);
        }, 3000);
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
            <Notification message={message}/>
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
