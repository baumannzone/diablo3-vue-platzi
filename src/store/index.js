import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    accessToken: null,
    config: {
      battleTag: null, // Profile#1234
      region: null,
      locale: null
    }
  },
  mutations: {
    SET_ACCESS_TOKEN (state, payload) {
      state.accessToken = payload
    },
    SET_LOADING (state, payload) {
      state.isLoading = payload
    },
    SET_CONFIG (state, payload) {
      // Merge 2 items
      state.config = { ...state.config, ...payload }
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
  getters: {
    selectedRegion: (state) => state.config.region,
    selectedLocale: (state) => state.config.locale,
    playerName: (state) => state.config.battleTag.split('#')[0],
    playerNumber: (state) => state.config.battleTag.split('#')[1],
    /**
     * Return the Profile for the account to retrieve, ready to use in the API
     * Replaces `#` for `-`
     * @param state
     * @returns {*}
     */
    account: (state) => state.config.battleTag.replace('#', '-')
  },
  modules: {
  }
})
