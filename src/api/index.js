import { get } from 'axios'
import store from '../store/index'

// {region} is one of: ['us', 'eu', 'kr', 'tw']
// More info: https://develop.battle.net/documentation/guides/regionality-and-apis
const { region } = store.state.config
const { locale } = store.state.config

const account = store.getters.account()
// const account = 'BazzMasta-2491'

const API_URL = `https://${region}.api.blizzard.com/`

/**
 * List all seasons
 * @returns {*}
 */
function listSeason () {
  const resource = 'data/d3/season/'
  const params = {
    'access_token': store.state.accessToken
  }
  return get(`${API_URL}${resource}`, { params })
}

/**
 * Returns the specified account profile.
 * @returns {*}
 */
function getAccount () {
  const resource = `d3/profile/${account}/`

  const params = {
    'access_token': store.state.accessToken,
    locale
  }
  return get(`${API_URL}${resource}`, { params })
}

export {
  getAccount,
  listSeason
}
