export default {
  namespaced: true,
  state: {
    isLoading: false
  },
  mutations: {
    SET_LOADING (state, payload) {
      state.isLoading = payload
    }
  }
}
