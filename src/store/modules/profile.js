// https://develop.battle.net/documentation/diablo-3/community-apis

import { get } from 'axios'
import router from '../../router'

export default {
  namespaced: true,
  state: {
    accountData: null,
    hero: null,
    heroItems: null
  },
  mutations: {
    SET_ACCOUNT_DATA (state, payload) {
      state.accountData = payload
    },
    SET_HERO_DATA (state, payload) {
      state.hero = payload
    }
  },
  actions: {

    /**
     * Returns the specified account profile.
     */
    getApiAccount ({ commit, getters, rootState, rootGetters }) {
      const { apiUrl } = getters
      const locale = rootGetters[ 'search/locale' ]
      const account = rootGetters[ 'search/account' ]
      const resource = `d3/profile/${account}/`

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
          commit('SET_ACCOUNT_DATA', null)
          console.log(err)
        })
    },

    /**
     * Returns a single hero.
     */
    getApiHero ({ commit, getters, rootState, rootGetters }) {
      const { apiUrl } = getters
      const locale = rootGetters[ 'search/locale' ]
      const account = rootGetters[ 'search/account' ]
      const heroId = rootState.search.heroId
      const resource = `d3/profile/${account}/hero/${heroId}`

      const params = {
        'access_token': rootState.oauth.accessToken,
        locale
      }
      get(`${apiUrl}${resource}`, { params })
        .then(({ data }) => {
          commit('SET_HERO_DATA', data)
          router.push({ name: 'Hero', params: { region: rootState.search.region, battleTag: account, heroId } })
        })
        .catch((err) => {
          commit('SET_HERO_DATA', null)
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
