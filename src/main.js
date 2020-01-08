import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

// Vue font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'
import store from './store'
import config from './config'

import { getToken } from '@/api/oauth'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './assets/css/main.styl'

library.add(
  faSpinner,
  faSearch
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    init () {
      store.dispatch('setLoading', true)
      getToken()
        .then(() => {
          // OK
          console.log('OK')
        })
        .catch((err) => {
          // KO
          console.log('KO')
          console.log(err)
        })
        .finally(() => {
          // Loaded
          store.dispatch('setLoading', false)
        })
    },
    saveConfig () {
      store.commit('SET_CONFIG', config)
    }
  },
  created () {
    this.init()
    this.saveConfig()
  },
  render: h => h(App)
}).$mount('#app')
