import CountryFromTwoToTen from "./CountryFromTwoToTen.jsx";
import Country from "./Country.jsx";

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
    } else if (filteredCountries.length > 0) {
        setTimeout(() => {
            console.log()
        }, 200)
        const country = filteredCountries[0]
        return (
            <>
                <ul>
                    <Country country={country}/>
                </ul>
            </>
        )
    } else {
        return (
            <>
                0 match
            </>
        )
    }

}

export default Countries