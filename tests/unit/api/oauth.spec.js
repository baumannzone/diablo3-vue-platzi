import axios from 'axios'
import { getToken } from '@/api/oauth'

jest.mock('axios')

describe('API/oauth.js', () => {
  test('getToken', async () => {
    const data = {
      access_token: 'EUNj8xPOH5DBzsuvleFjg3omsEX9wtmO0T',
      token_type: 'bearer',
      expires_in: 86399
    }

    axios.post.mockImplementationOnce(() => Promise.resolve(data))

    await expect(getToken()).resolves.toEqual(data)
    // All call's array
    // console.log('axios.post.mock.calls')
    // First call arguments array
    // console.log(JSON.stringify(axios.post.mock.calls[0]))
    expect(axios.post).toBeCalledTimes(1)
  })
})
