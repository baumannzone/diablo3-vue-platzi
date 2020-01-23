import Vue from 'vue'
import Vuex from 'vuex'

import oauth from './modules/oauth'
import loading from './modules/loading'
import search from './modules/search'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    oauth,
    loading,
    search
  }
})
