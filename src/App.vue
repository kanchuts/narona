<template>
  <div id="app" class="container">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <Header></Header>
    <div class="card">
        <div class="card-header" id="chart-indoneisa"> INDONESIA </div>
        <div class="card-body">
            <Dashboard />
        </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/header.vue'
import Dashboard from './components/dashboard/Indonesia.vue'
export default {
  name: 'App',
  components: {
      Header,
      Dashboard
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
  margin-top: 60px;
}
</style>
