import Vue from 'vue'
import App from './App.vue'
import List from './list.vue'
import Contact from './contact.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

const routes = {
  '/': App,
  '/list': List,
  '/contact' : Contact
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] 
    }
  },
  render (h) { return h(this.ViewComponent) }
})
