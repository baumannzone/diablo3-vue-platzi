import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

// Vue font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faSkull, faCrown, faDungeon, faHatWizard, faHammer, faGem } from '@fortawesome/free-solid-svg-icons'
import { faVuejs, faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'
import store from './store'

import { getToken } from '@/api/oauth'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './assets/css/main.styl'

library.add(
  faSearch,
  faSkull,
  faCrown,
  faDungeon,
  faHatWizard,
  faHammer,
  faGem,
  faVuejs,
  faBootstrap
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    init () {
      store.commit('setLoading', true)
      getToken()
        .then((res) => {
          console.log(res)
          store.commit('setLoading', false)
        })
        .catch((err) => {
          store.commit('setLoading', false)
          this.$bvToast.toast(err.message, { title: 'OAuth Error' })
        })
    }
  },
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
