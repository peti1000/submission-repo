import {useEffect, useState} from "react";
import weatherService from "../services/weather.js";

const Weather = ({capital}) => {
    const [weather, setWeather] = useState(null)
    useEffect(() => {
        weatherService
            .get(capital)
            .then(city => {
                setWeather(city)
            })
            .catch(error => {
                console.log('error fetching data', error.data)
            })
    }, [capital])
    return (
        <>
            <h2>Weather in {capital}</h2>
            {weather &&  (
                <>
                    Temperature {weather.main['temp']} Celsius
                    <br />
                    <img src={`https://openweathermap.org/img/wn/${weather['weather'][0]['icon']}@2x.png`} alt={`${weather['weather'][0]['description']}`}/>
                    <br/>
                    Wind {weather['wind']['speed']} m/s
                </>
            )}
        </>
    )
}

export default Weather