import axios from 'axios'
import store from '@/store/index'
import { getApiAccount } from '@/api/search'
import * as regionUtils from '@/utils/regions'

jest.mock('axios')

describe('API / search.js', () => {
  test('getApiAccount', async () => {
    const token = 'EUNj8xPOH5DBzsuvleFjg3omsEX9wtmO0T'
    const region = 'eu'
    const account = 'SuperUser-1234'
    const url = `https://${region}.api.blizzard.com/d3/profile/${account}/`
    const locale = 'en_GB'

    regionUtils.regions = jest.fn(() => locale)
    store.state.oauth.accessToken = token

    const params = {
      params: {
        access_token: token,
        locale: locale
      }
    }

    axios.get.mockImplementationOnce(() => Promise.resolve('ok'))

    await expect(getApiAccount({ region, account })).resolves.toEqual('ok')

    // All call's array
    // console.log('axios.post.mock.calls')

    // First call arguments array
    // console.log(JSON.stringify(axios.get.mock.calls[ 0 ]))
    expect(axios.get).toBeCalledTimes(1)

    expect(axios.get).toHaveBeenCalledWith(url, params)
  })
})
