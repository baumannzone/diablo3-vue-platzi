import { post } from 'axios'

// Env
const clientId = process.env.VUE_APP_CLIENT_ID
const clientSecret = process.env.VUE_APP_CLIENT_SECRET

const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

/**
 * Retrieving an access token. Valid for 24 hours.
 * After an application retrieves an access token, it provides that token when making requests to API resources.
 * @returns {Promise<any> | Promise<void> | PromiseLike<any>}
 */
function getToken () {
  const body = new FormData()
  body.append('grant_type', 'client_credentials')
  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
    auth: { username: clientId, password: clientSecret }
  }

  return post(`${API_URL}`, body, config)
}

export {
  getToken
}
