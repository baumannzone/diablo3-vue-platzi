import { get } from 'axios'
import store from '../store/index'

// {region} is one of: ['us', 'eu', 'kr', 'tw']
// More info: https://develop.battle.net/documentation/guides/regionality-and-apis
const region = 'eu'

// const lang = 'es_ES'
// const playerTag = 'SuperRambo#2613'
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

export {
  listSeason
}
