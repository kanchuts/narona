<template>
    <div class="row text-left row mx-lg-n4 mx-n4">
            <div class=" col-md-4" style="color: white">
                <div class="card m1">
                    <div class="card-body" style="background: #8EC7BF">
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
                    <div class="card-body" style="background: #8EC7BF">
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
                    <div class="card-body" style="background: #8EC7BF">
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
 import { APIServiceGlobal } from '../../services/APIServiceGlobal.js'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faSmileBeam, faSadTear, faFrown } from '@fortawesome/free-solid-svg-icons'
    library.add(faSmileBeam, faSadTear, faFrown)
    // import moment from 'moment'

const apiService = new APIServiceGlobal()

 export default {
     name: "StatistikGlobal",
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
         getStatGlobe () {
            apiService.getDataGlobal().then((data) => {

                this.totalPositif = data.TotalConfirmed
                this.totalSembuh = data.TotalRecovered
                this.totalMeninggal = data.TotalDeaths

             })
             .catch(error => {console.error(error) })
             .finally(() => { this.isLoading = false})
         }
     },
     mounted() {
         this.getStatGlobe()
     },
 }
</script>
<style scoped>
</style>
