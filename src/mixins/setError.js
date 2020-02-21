import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations('error', {
      setError: 'SET_ERROR'
    }),
    /**
     * API response error.
     * @param params {Object || null} Error Object
     */
    setApiErr (params) {
      this.setError(params)
    }
  }
}
