<template>
    <div id="list">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <Header></Header>
        <div class="card">
            <Provinsi/>
        </div>
    </div>

</template>

<script>
import Header from './components/header.vue'
import Provinsi from './components/provinsi/Provinsi.vue'

export default {
    name: 'list',
    components: {
        Header,
        Provinsi
    }
}
</script>

<style>
#list {
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

body {
    background-color: #DFDCD4;
}
</style>

