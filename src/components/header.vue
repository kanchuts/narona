<template>
    <div class="menu">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">NARONA</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-nav class="ml-auto">
            <b-navbar-nav>
                <b-nav-item href="#">DASHBOARD</b-nav-item>
                <b-nav-item href="#">LIST PROVINSI</b-nav-item>
                <b-nav-item href="#">KONTAK</b-nav-item>
            </b-navbar-nav>
        </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
import Vue from 'vue'
import {BootstrapVue, BootstrapVueIcons, NavbarPlugin} from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(NavbarPlugin)

export default {
    name: "Header"
}
</script>

<style>
    .menu{
       width: 100%;
    }
</style>
