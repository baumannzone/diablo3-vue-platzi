import Vue from 'vue'

// BootstrapVue
import './plugins/bootstrapVue'

// Font-awesome
import './plugins/fontAwesome'

import App from './App.vue'
import router from './router'
import store from './store'

// Global CSS
import './assets/css/main.styl'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    init () {
      store.dispatch('oauth/getToken')
    }
  },
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
