export default {
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
  }
}
