import Vue from 'vue'
import Vuex from 'vuex'

import oauth from './modules/oauth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false
  },
  mutations: {
    SET_LOADING (state, payload) {
      state.isLoading = payload
    }
  },
  actions: {
    setLoading ({ commit }, payload) {
      commit('SET_LOADING', payload)
    }
  },
  getters: {
    // account: (state) => state.config.battleTag.replace('#', '-')
  },
  modules: {
    oauth
  }
})
