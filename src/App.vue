<template>
  <div id="app">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <Header></Header>
        <chartIndonesia />
        <StatistikIndonesia />
        <chart/>
        <StatistikIndonesia />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/header.vue'
import chartIndonesia from './components/dashboard/Indonesia.vue'
import StatistikIndonesia from './components/dashboard/Indostat.vue'
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


</style>
