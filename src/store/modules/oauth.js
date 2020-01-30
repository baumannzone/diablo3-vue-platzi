import { post } from 'axios'
import router from '@/router'

const clientId = process.env.VUE_APP_CLIENT_ID
const clientSecret = process.env.VUE_APP_CLIENT_SECRET

export default {
  namespaced: true,
  state: {
    accessToken: null
  },
  mutations: {
    SET_ACCESS_TOKEN (state, payload) {
      state.accessToken = payload
    }
  },
  actions: {
    getToken ({ commit, getters }) {
      commit('loading/SET_LOADING', true, { root: true })

      const body = new FormData()
      body.append('grant_type', 'client_credentials')
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
        auth: { username: clientId, password: clientSecret }
      }

      post(`${getters.tokenUrl}`, body, config)
        .then(({ data }) => {
          commit('SET_ACCESS_TOKEN', data.access_token)
        })
        .catch((err) => {
          commit('SET_ACCESS_TOKEN', null)
          const errObj = {
            message: err.message
          }
          if (err.response) {
            errObj.data = err.response.data
            errObj.status = err.response.status
          }
          commit('error/SET_ERROR', errObj, { root: true })
          router.push({ name: 'Error' })
        })
        .finally(() => {
          commit('loading/SET_LOADING', false, { root: true })
        })
    }
  },
  getters: {
    tokenUrl: () => {
      const region = 'eu'
      return `https://${region}.battle.net/oauth/token`
    }
  }
}
