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

export default CountryFromTwoToTen