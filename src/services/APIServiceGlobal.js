import axios from 'axios'
const API_URL = 'https://api.covid19api.com'

export class APIServiceGlobal {
    getBaseUrl () {
        return API_URL
    }

    getDataGlobal () {
        const url = `${API_URL}/world/total`
        let data = axios.get(url).then(response => response.data)
        return data
    }

    getGlobal () {
        const url = `${API_URL}/world`
        let data = axios.get(url).then(response => response.data)
        return data
    }
}
