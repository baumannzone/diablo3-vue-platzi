<template>
  <div class="home">
    <div class="profile-body">
      <template v-if="profileData !== null">
        <GridContainer :profile-data="profileData"/>
        <ArtisansBlock :artisans-data="artisansData"/>
      </template>
    </div>
  </div>
</template>

<script>
import { getApiAccount } from '@/api/search'

import GridContainer from './GridContainer/Index'
import ArtisansBlock from './ArtisansBlock/Index'

export default {
  name: 'HomeView',
  components: { ArtisansBlock, GridContainer },
  data () {
    return {
      profileData: null
    }
  },
  computed: {
    artisansData () {
      return {
        blacksmith: this.profileData.blacksmith,
        blacksmithHardcore: this.profileData.blacksmithHardcore,
        jeweler: this.profileData.jeweler,
        jewelerHardcore: this.profileData.jewelerHardcore,
        mystic: this.profileData.mystic,
        mysticHardcore: this.profileData.mysticHardcore
      }
    }
  },
  created () {
    const { region, battleTag: account } = this.$route.params
    // Fetch Data
    getApiAccount({ region, account })
      .then(({ data }) => {
        this.profileData = data
      })
      .catch((err) => {
        this.profileData = null
        if (err.response) {
          // The request was made and the server responded with a status code (2xx)
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
        } else if (err.request) {
          // The request was made but no response was received
          console.log(err.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', err.message)
        }
        console.log(err.config)
        this.$bvToast.toast(err.message, { title: 'Error' })
      })
  }
}
</script>
