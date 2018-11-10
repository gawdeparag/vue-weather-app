import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Bootstrap from 'bootstrap'

Vue.prototype.Bootstrap = Bootstrap

Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
