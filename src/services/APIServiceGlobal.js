import axios from 'axios'
const API_URL = 'https://api.covid19api.com/world/total'

export class APIServiceGlobal {
    getBaseUrl () {
        return API_URL
    }

    getDataGlobal () {
        const url = `${API_URL}`
        let data = axios.get(url).then(response => response.data)
        return data
    }
}
