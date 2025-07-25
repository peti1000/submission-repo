import {useState, useEffect} from 'react'
import countryService from './services/countries.js'

const Language = ({language}) => {
    return (
        <>
            <li>{language}</li>
        </>
    )
}

const Country = ({country}) => {
    return (
        <>
            <h1>{country.name.common}</h1>
            Capital {country["capital"]} <br/>
            Area {country.area}
            <h2>Languages</h2>
            <ul>
                {Object.entries(country.languages).map((language) => (
                    <Language key={language[0]} language={language[1]}/>
                ))}
            </ul>
            <img src={country.flags["png"]} alt={country.flags["alt"]}/>

        </>
    )
}

const CountryFromTwoToTen = ({country, showCountry}) => {

    const filterCountry = () => showCountry(country.name.common)
    return (
        <>
            {country.name.common}
            <button onClick={filterCountry}>Show</button>
            <br/>
        </>
    )
}

const Countries = ({filteredCountries, showCountry}) => {
    if (filteredCountries.length > 10) {
        return (
            'Too many matches, specify another filter'
        )
    } else if (filteredCountries.length > 1) {
        return (
            <>
                <ul>
                    {filteredCountries.map(country =>
                        <CountryFromTwoToTen key={country.name.common} country={country} showCountry={showCountry}/>)}
                </ul>
            </>
        )
    }
    return (
        <>
            <ul>
                {filteredCountries.map(country =>
                    <Country key={country.name.common} country={country}/>)}
            </ul>
        </>
    )
}

const CountryForm = ({handleFilterChange}) => {
    return (
        <>
            <form>
                find countries <input onChange={handleFilterChange}/>
            </form>
        </>
    )
}


const App = () => {

    const [countries, setCountries] = useState([])
    const [filteredCountry, setFilteredCountry] = useState('')

    useEffect(() => {
        countryService
            .getALL()
            .then(initialCountries => {
                setCountries(initialCountries)
            })
    })

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
