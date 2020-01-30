import axios from 'axios'
import store from '@/store/index'
import { listSeasons } from '@/api/season'

jest.mock('axios')

describe('API/season.js', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('listSeasons', async () => {
    const token = 'EUNj8xPOH5DBzsuvleFjg3omsEX9wtmO0T'
    const region = 'eu'
    const url = `https://${region}.api.blizzard.com/data/d3/season/`

    const params = {
      params: {
        access_token: token
      }
    }

    store.state.oauth.accessToken = token

    await listSeasons(region)

    expect(axios.get).toBeCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith(url, params)
  })
})
