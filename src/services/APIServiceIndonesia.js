import axios from 'axios'
const API_URL = 'https://api.covid19api.com/'

export class APIServiceIndonesia {

    getBaseUrl () {
        return API_URL
    }

    getDataIndonesia() {
        const url = `${API_URL}/country/indonesia`
        let data = axios.get(url).then(Response => Response.data)
        
        return data
    }
}
