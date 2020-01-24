import { get } from 'axios'
import store from '../store/index'

// https://{region}.api.blizzard.com, where {region} is one of us | eu | kr | tw
const protocol = 'https://'
const host = '.api.blizzard.com/'

/**
 * Returns an index of available seasons.
 * GET – /data/d3/season/
 * @param region {String}
 * @returns {Promise}
 */
function listSeasons (region) {
  const resource = `data/d3/season/`
  const API_URL = `${protocol}${region}${host}${resource}`

  const params = {
    'access_token': store.state.oauth.accessToken
  }

  return get(API_URL, { params })
}

export {
  listSeasons
}
