<template>
  <div class="home">
    <div class="profile-body">
      <GridContainer />
      <div class="full-block">
        <div class="artisans">Artesanos 1 2 y 3</div>
      </div>
    </div>
  </div>
</template>

<script>
// import { getAccount } from '@/api'

import GridContainer from './GridContainer/Index'

export default {
  name: 'HomeView',
  components: { GridContainer },
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
