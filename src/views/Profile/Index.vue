<template>
  <div class="home">
    <div class="profile-body">
      <GridContainer />
      <ArtisansBlock artisans="{}"/>
    </div>
  </div>
</template>

<script>
// import { getAccount } from '@/api'

import GridContainer from './GridContainer/Index'
import ArtisansBlock from './ArtisansBlock/Index'

export default {
  name: 'HomeView',
  components: { ArtisansBlock, GridContainer },
  created () {
    // getAccount()
    //   .then(res => {
    //     console.log('""""""""""""res""""""""""""')
    //     console.log(res)
    //   })
    //   .catch(err => {
    //     console.log('""""""""""""err""""""""""""')
    //     console.log(err)
    //   })
  }
}
</script>
