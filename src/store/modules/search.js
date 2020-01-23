export default {
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
  }
}
