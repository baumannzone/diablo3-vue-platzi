import { get } from 'axios'
import store from '../store/index'

const region = store.state.region
const locale = store.state.locale

const API_URL = `https://${region}.api.blizzard.com/`

/**
 * Returns the specified account profile.
 * @returns {*}
 */
function getAccount () {
  const account = store.getters.account
  const resource = `d3/profile/${account}/`

  const params = {
    'access_token': store.state.accessToken,
    locale
  }
  return get(`${API_URL}${resource}`, { params })
}

export {
  getAccount
}
