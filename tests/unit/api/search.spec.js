import axios from 'axios'
import store from '@/store/index'
import { getApiAccount, getApiHero, getApiDetailedHeroItems } from '@/api/search'
import * as regionUtils from '@/utils/regions'

jest.mock('axios')

describe('API/search.js', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('getApiAccount', async () => {
    const token = 'EUNj8xPOH5DBzsuvleFjg3omsEX9wtmO0T'
    const region = 'eu'
    const account = 'SuperUser-1234'
    const url = `https://${region}.api.blizzard.com/d3/profile/${account}/`
    const locale = 'en_GB'

    store.state.oauth.accessToken = token
    regionUtils.regions = jest.fn(() => locale)

    const params = {
      params: {
        access_token: token,
        locale: locale
      }
    }

    await getApiAccount({ region, account })

    expect(axios.get).toBeCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith(url, params)
  })

  test('getApiHero', async () => {
    const token = 'EUNj8xPOH5DBzsuvleFjg3omsEX9wtmO0T'
    const region = 'eu'
    const account = 'SuperUser-1234'
    const heroId = '12345678'
    const url = `https://${region}.api.blizzard.com/d3/profile/${account}/hero/${heroId}`
    const locale = 'en_GB'

    store.state.oauth.accessToken = token
    regionUtils.regions = jest.fn(() => locale)

    const params = {
      params: {
        access_token: token,
        locale: locale
      }
    }

    await getApiHero({ region, account, heroId })

    expect(axios.get).toBeCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith(url, params)
  })

  test('getApiDetailedHeroItems', async () => {
    const token = 'EUNj8xPOH5DBzsuvleFjg3omsEX9wtmO0T'
    const region = 'eu'
    const account = 'SuperUser-1234'
    const heroId = '12345678'
    const url = `https://${region}.api.blizzard.com/d3/profile/${account}/hero/${heroId}/items`
    const locale = 'en_GB'

    regionUtils.regions = jest.fn(() => locale)
    store.state.oauth.accessToken = token

    const params = {
      params: {
        access_token: token,
        locale: locale
      }
    }

    await getApiDetailedHeroItems({ region, account, heroId })

    expect(axios.get).toBeCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith(url, params)
  })
})
