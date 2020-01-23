<template>
  <div class="home">
    <div class="profile-body">
      <GridContainer />
      <ArtisansBlock />
    </div>
  </div>
</template>

<script>
// import { getAccount } from '@/api'

import GridContainer from './GridContainer/Index'
import ArtisansBlock from './ArtisansBlock/Index'

export default {
  name: 'HomeView',
  components: { ArtisansBlock, GridContainer }
}
</script>
