<template>

        <table>
        </table>

</template>

 <script>
    import { APIServiceIndonesia } from '../../services/APIServiceIndonesia.js'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    // import moment from 'moment'

const apiServiceProvinsi = new APIServiceIndonesia()

 export default {
     name: "DataProvinsi",
     components: {
         // eslint-disable-next-line vue/no-unused-components
         FontAwesomeIcon
     },
     data(){
         return {
             totalProvinsi:'',
             totalPositif: '',
             totalMeninggal: '',
             totalSembuh: ''
         }
     },
     methods: {
         getStat () {
            apiServiceProvinsi.getDataProvinsi().then((data) => {
                    let dataProvinsi = []

                    let dataPositif = []

                    let dataSembuh = []

                    let dataMeninggal = []

                 // eslint-disable-next-line no-unused-vars
                 for (let [i, day] of data.entries()){
                     dataProvinsi.push(day.Provinsi)
                    dataPositif.push(day.Kasus_Posi)
                    dataSembuh.push(day.Kasus_Semb)
                    dataMeninggal.push(day.Kasus_Meni)
                    }
                    this.totalProvinsi = dataProvinsi[dataProvinsi]
                this.totalPositif = dataPositif[dataPositif.lengt]
                this.totalSembuh = dataSembuh[dataSembuh.length]
                this.totalMeninggal = dataMeninggal[dataMeninggal.length]

             })
             .catch(error => {console.error(error) })
             .finally(() => { this.isLoading = false})
         }
     },
     mounted() {
         this.getStat()
     },
 }
 </script>
<style>
.cases{
    margin-top: 5px;
}
.badan{

    width: 70%;
    margin-top: 20px;
    left: 15%;

}
</style>