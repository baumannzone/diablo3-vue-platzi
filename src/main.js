import Vue from 'vue'

// BootstrapVue
import './plugins/bootstrapVue'

// Vue Font-Awesome
import './plugins/fontAwesome'

// Custom directives
import './directives'

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
      store.dispatch('oauth/getToken', null, { root: true })
    }
  },
  created () {
    this.init()
    // console.log('process.env:')
    // console.log(process.env)
  },
  render: h => h(App)
}).$mount('#app')
