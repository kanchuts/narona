import axios from 'axios'
const API_URL = 'https://api.covid19api.com/'
const API_URL1 = 'https://api.kawalcorona.com/indonesia/'

export class APIServiceIndonesia {

    getBaseUrl () {
        return API_URL
    }

    getDataIndonesia() {
        const url = `${API_URL}/country/indonesia`
        let data = axios.get(url).then(Response => Response.data)

        return data
    }

    getStatIndonesia () {
        const url = `${API_URL1}`
        let data = axios.get(url).then(Response => Response.data)
        
        return data
    }
}
