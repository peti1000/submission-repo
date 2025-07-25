import Weather from "./Weather.jsx";
import Language from "./Language.jsx";

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
            <Weather capital={country['capital']}/>
        </>
    )
}

export default Country