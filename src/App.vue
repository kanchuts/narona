<template>
  <div id="app">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <Header></Header>
    <div class="card">
        <div class="card-header" id="chart-indoneisa"> INDONESIA </div>
            <chartIndonesia />
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/header.vue'
import chartIndonesia from './components/dashboard/Indonesia.vue'
export default {
  name: 'App',
  components: {
      Header,
      chartIndonesia
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
.card {
    width: 70%;
    margin-top: 20px;
    left: 15%;
}

</style>
