// https://develop.battle.net/documentation/diablo-3/community-apis

import { get } from 'axios'
import router from '../../router'

export default {
  namespaced: true,
  state: {
    account: null,
    hero: null,
    heroItems: null
  },
  mutations: {
    SET_ACCOUNT_DATA (state, payload) {
      state.account = payload
    }
  },
  actions: {
    /**
     * Returns the specified account profile.
     */
    getApiAccount ({ commit, getters, rootState, rootGetters }, payload) {
      const { apiUrl } = getters
      const account = rootGetters['search/account']
      const resource = `d3/profile/${account}/`
      const locale = rootState.search.locale

      const params = {
        'access_token': rootState.oauth.accessToken,
        locale
      }
      get(`${apiUrl}${resource}`, { params })
        .then(({ data }) => {
          commit('SET_ACCOUNT_DATA', data)
          router.push({ name: 'Profile', params: { region: rootState.search.region, battleTag: account } })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  getters: {
    apiUrl: (state, getters, rootState) => {
      const region = rootState.search.region
      return `https://${region}.api.blizzard.com/`
    }
  }

}
