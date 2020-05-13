
import axios from 'axios'
const API_URL = 'https://indonesia-covid-19.mathdro.id/api/provinsi'
// const API_URL1 = 'https://api.kawalcorona.com/indonesia/'

export class APIServiceProvince {

    getBaseUrl () {
        return API_URL
    }

    httpGet = async function (url) {
        const response = await axios.get(url);
        return response;
    }
    
    getDataProvinsi() {
        const url = `${API_URL}`
        let data = axios.get(url).then(Response => Response.data)

        return data
    }

    fetchDataPerProvince() {
        let url = `${API_URL}`;
        let data = this.httpGet(url);
        return data;
    }

    // getStatIndonesia () {
    //     const url = `${API_URL1}`
    //     let data = axios.get(url).then(Response => Response.data)

    //     return data
    // }
}
