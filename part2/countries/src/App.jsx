import {useState, useEffect} from 'react'
import countryService from './services/countries.js'
import CountryForm from "./components/CountryForm.jsx";
import Countries from "./components/Countries.jsx";

const App = () => {
    const [countries, setCountries] = useState([])
    const [filteredCountry, setFilteredCountry] = useState('')

    useEffect(() => {
        countryService
            .getALL()
            .then(initialCountries => {
                setCountries(initialCountries)
            })
    }, [])

    const showCountry = (country) => {
        setFilteredCountry(country)
    }

    const handleFilterChange = (event) => {
        setFilteredCountry(event.target.value)
    }

    const filteredCountries = countries.filter(c => c.name.common.toLowerCase().includes(filteredCountry.toLowerCase()))

    return (
        <>
            <CountryForm handleFilterChange={handleFilterChange}/>
            <Countries filteredCountries={filteredCountries} showCountry={showCountry}/>
        </>
    )
}

export default App
