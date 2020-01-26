import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations('error', {
      setError: 'SET_ERROR'
    }),
    /**
     * Not found error.
     * @param params {Object || null} Route params
     */
    setNotFound (params) {
      this.setError(params)
    }
  }
}
