<template>

        <div class="row text-left row mx-lg-n4 mx-n4">
            <div class=" col-md-4" style="color: white">
                <div class="card m1">
                    <div class="card-body" style="background: #B5D2CE">
                        <div class="row">
                            <div class="col-md-4">
                                <font-awesome-icon :icon="['fas', 'frown']" size="3x" />
                            </div>
                            <div class="col-md-8 text-center">
                                POSITIF
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">

                            </div>
                            <div class="col-md-8 text-center cases">
                                {{ totalPositif }} KASUS
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" col-md-4" style="color: white">
                <div class="card m2">
                    <div class="card-body" style="background: #B5D2CE">
                        <div class="row">
                            <div class="col-md-4">
                               <font-awesome-icon :icon="['fas', 'smile-beam']" size="3x" />
                            </div>
                            <div class="col-md-8 text-center">
                                SEMBUH
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">

                            </div>
                            <div class="col-md-8 text-center cases">
                               {{totalSembuh}} KASUS
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" col-md-4" style="color: white">
                <div class="card m3">
                    <div class="card-body" style="background: #B5D2CE">
                        <div class="row">
                            <div class="col-md-4">
                                <font-awesome-icon :icon="['fas', 'sad-tear']" size="3x" />
                            </div>
                            <div class="col-md-8 text-center">
                                MENINGGAL
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">

                            </div>
                            <div class="col-md-8 text-center cases">
                                {{totalMeninggal}} KASUS
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</template>

 <script>
    import { APIServiceIndonesia } from '../../services/APIServiceIndonesia.js'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faSmileBeam, faSadTear, faFrown } from '@fortawesome/free-solid-svg-icons'
    library.add(faSmileBeam, faSadTear, faFrown)
    // import moment from 'moment'

const apiService = new APIServiceIndonesia()

 export default {
     name: "StatistikIndonesia",
     components: {
         FontAwesomeIcon
     },
     data(){
         return {
             totalPositif: '',
             totalMeninggal: '',
             totalSembuh: ''
         }
     },
     methods: {
         getStat () {
            apiService.getDataIndonesia().then((data) => {
                    let dataPositif = []

                    let dataSembuh = []

                    let dataMeninggal = []

                 // eslint-disable-next-line no-unused-vars
                 for (let [i, day] of data.entries()){

                    dataPositif.push(day.Confirmed)
                    dataSembuh.push(day.Recovered)
                    dataMeninggal.push(day.Deaths)
                    }
                this.totalPositif = dataPositif[dataPositif.length - 1]
                this.totalSembuh = dataSembuh[dataSembuh.length - 1]
                this.totalMeninggal = dataMeninggal[dataMeninggal.length - 1]

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
