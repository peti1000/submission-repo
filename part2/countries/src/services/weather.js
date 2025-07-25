import axios from "axios";

const api_key = import.meta.env.VITE_SOME_KEY
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'

const get = (city) => {
    const request = axios.get(`${baseUrl}q=${city}&appid=${api_key}&units=metric`)
    return request.then(response => response.data)
}

export default {get}