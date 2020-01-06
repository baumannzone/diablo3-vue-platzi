import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    accessToken: null
  },
  mutations: {
    SET_ACCESS_TOKEN (state, payload) {
      state.accessToken = payload
    },
    SET_LOADING (state, payload) {
      state.isLoading = payload
    }
  },
  actions: {
    setAccessToken ({ commit }, payload) {
      commit('SET_ACCESS_TOKEN', payload)
    },
    setLoading ({ commit }, payload) {
      commit('SET_LOADING', payload)
    }
  },
  modules: {
  }
})
