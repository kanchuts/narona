<template v-slot:content>

        <div class="card-body" style="height: auto">
         <content-loader :is-loading="isLoading" @refresh-data="renderChartIndonesia">
            <template>
                <highcharts :options="chartOption"></highcharts>
            </template>
        </content-loader>
        </div>
    
</template>

<script>
import {APIServiceIndonesia} from '../../services/APIServiceIndonesia';
import {Chart} from 'highcharts-vue'
import moment from 'moment'
import ContentLoader from '@/components/ContentLoader'

const apiService = new APIServiceIndonesia()
export default {
    name: "chartIndonesia",
    components: {
       ContentLoader, highcharts: Chart
    },
    data() {
        return {
            isLoading: true,
            chartOption: {
                chart: {
                    type: 'areaspline',
                },
                title: {
                    text: ''
                },
                legend: {
                    layout: 'vertical',
                    align: 'left',
                    verticalAlign: 'top',
                    x: 150,
                    y: 100,
                    floating: true,
                    borderWidth: 1,
                },
                xAxis: {
                    categories: [],
                    title: {
                        text: 'waktu (Tanggal/Bulan)'
                    },
                    tickInterval: 3
                },
                yAxis: {
                    title: {
                        text: 'jumlah kasus'
                    }
                },
                tooltip: {
                    shared: true,
                    valueSuffix: 'orang'
                },
                plotOptions: {
                    areaspline: {
                        fillOpacity: 0.5
                    }
                },
                credits: {
                    text: 'Source',
                    href: '#'
                },
                series: []
            }
        }
    },
    methods: {
        renderChartIndonesia () {
            this.isLoading = true
            this.chartOption.credits.href = apiService.getbaseUrl()
            this.chartOption.xAxis.categories = this.chartOption.series = [];
            apiService.getDataIndonesia()
                .then((data) => {
                    let dates = []
                    let dataPositif = []
                    let dataSembuh = []
                    let dataMeninggal = []
                    let countData = data.length;
                    let tickInterval = Math.floor((countData / 60) * this.chartOption.xAxis.tickInterval)
                    // eslint-disable-next-line no-unused-vars
                    for (let [i, day] of data.entries()){
                    dates.push(moment(data.Date).format('D/MM'))
                    dataPositif.push(day.Confirmed)
                    dataSembuh.push(day.Recovered)
                    dataMeninggal.push(day.Deaths)
                    }
                    this.chartOption.xAxis.categories = dates
                    this.chartOption.xAxis.tickInterval = tickInterval
                    this.chartOption.series.push({name: 'positif', data: dataPositif})
                    this.chartOption.series.push({name: 'sembuh', data: dataSembuh})
                    this.chartOption.series.push({name: 'meninggal', data: dataMeninggal})
                })
                .catch(error => {console.error(error)})
                // eslint-disable-next-line no-unused-vars
                .finally(error => { this.isLoading = false})
        },
    },
    mounted() {
        this.renderChartIndonesia()
    },
}
</script>
<style scoped>

</style>
