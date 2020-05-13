<template>
    <div>
        <br>
        <p class="title"><strong>Data Per Provinsi</strong></p>
        <Grid :data-items="sortedData" :columns="columns">
        </Grid>
    </div>
</template>

<script>
    import {
        Grid
    } from '@progress/kendo-vue-grid';
    import { APIServiceIndonesia } from '../../services/APIServiceIndonesia';
    import '@progress/kendo-theme-default/dist/all.css';

    const apiCovidIndonesia = new APIServiceIndonesia();

    export default {
        name: "DataTableIndonesia",
        components: {
            Grid
        },
        data() {
            return {
                dataSet: [],
                columns: [{
                        field: 'provinsi',
                        title: 'Provinsi'
                    },
                    {
                        field: 'kasusPosi',
                        title: 'Terinfeksi'
                    },
                    {
                        field: 'kasusMeni',
                        title: 'Meninggal'
                    },
                    {
                        field: 'kasusSemb',
                        title: 'Pulih'
                    }
                ],
                sort: [{
                    field: 'provinsi',
                    dir: 'asc'
                }, {
                    field: 'kasusPosi',
                    dir: 'desc'
                }]
            };
        },
        methods: {
            generateDataTable() {
                apiCovidIndonesia.getDataProvinsi().then((data) => {
                    this.dataSet = data.data.data;
                });
            }
        },
        computed: {
            sortedData: {
                get: function () {
                    return this.dataSet
                }
            }
        },
        mounted() {
            this.generateDataTable();
        },
    }
</script>

<style scoped>

</style>
