import { post } from 'axios'
import router from '@/router'

const clientId = '7958e6cf4d9d4cb6b0d1db97ae284df1'
const clientSecret = '6eGrIFuSGWb3Zgi0H9EctYPVE6fscbNP'

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
