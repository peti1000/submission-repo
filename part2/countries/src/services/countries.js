import axios from "axios";

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getALL = () => {
    const request = axios.get(`${baseUrl}/all`)
    return request.then(response => response.data)
}

export default {getALL}