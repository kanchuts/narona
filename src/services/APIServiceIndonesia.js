import axios from 'axios'
const API_URL = 'https://api.covid19api.com/'
const API_URL1 = 'https://api.kawalcorona.com/indonesia/'

export class APIServiceIndonesia {

    getBaseUrl () {
        return API_URL
    }

    httpGet = async function (url) {
        const response = await axios.get(url);
        return response;
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

    getDataProvinsi(){
        let url = `https://indonesia-covid-19.mathdro.id/api/provinsi`;
        let data = this.httpGet(url);
        return data;
    }
}
