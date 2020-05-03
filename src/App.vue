<template>
  <div id="app">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <Header></Header>
    <div class="card chart">
        <div class="card-header" id="chart-indoneisa"> INDONESIA </div>
        <chartIndonesia />
        <StatistikIndonesia />
        </div>
        <StatistikIndonesia />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/header.vue'
import chartIndonesia from './components/dashboard/Indonesia.vue'
import StatistikIndonesia from './components/dashboard/IndoStat.vue'
// import chart from './components/dashboard/Tumbal.vue'
export default {
  name: 'App',
  components: {
      Header,
      chartIndonesia,
      StatistikIndonesia,
    //   chart
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.m1, .m2, .m3, .chart {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.m1:hover, .m2:hover, .m3:hover{
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.card {
    width: 70%;
    margin-top: 20px;
    left: 15%;
    margin-bottom: 25px;
}

#app {
    background: #DFDCD4;
}
</style>
