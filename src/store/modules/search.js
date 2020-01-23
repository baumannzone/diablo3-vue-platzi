export default {
  namespaced: true,
  state: {
    region: null,
    locale: null,
    battleTag: null,
    heroId: null
  },
  mutations: {
    SET_REGION (state, payload) {
      state.region = payload
    },
    SET_LOCALE (state, payload) {
      state.locale = payload
    },
    SET_BATTLE_TAG (state, payload) {
      state.battleTag = payload
    },
    SET_HERO_ID (state, payload) {
      state.heroId = payload
    }
  },
  getters: {
    /**
     * Replaces '#' for '-' in the battleTag. Return the account ready to be used in the requests
     * @param state
     * @returns {string} Account
     */
    account: (state) => {
      if (state.battleTag) {
        return state.battleTag.replace('#', '-')
      }
    }
  }
}
