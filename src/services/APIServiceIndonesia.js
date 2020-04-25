import axios from 'axios'
const API_URL = 'https://api.kawalcorona.com/indonesia'

export class APIServiceIndonesia {
    getBaseUrl () {
        return API_URL
    }

    getDataIndonesia() {
        const url = `${API_URL}`
        let data = axios.get(url).then(Response => Response.data)
        return data
    }
}
