import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Bootstrap from 'bootstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.prototype.Bootstrap = Bootstrap

Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
