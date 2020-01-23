<template>
  <div class="artisan-list">
    <hr class="bg-light my-5">
    <h3 class="font-diablo mb-4">Artisans</h3>
    <b-row>
      <b-col lg="4" v-for="artisan in artisansInfo" :key="artisan.name">
        <ArtisanItem :artisan="artisan"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import ArtisanItem from './ArtisanItem'

export default {
  name: 'ArtisansBlock',
  components: { ArtisanItem },
  computed: {
    ...mapState('profile', [ 'account' ]),
    artisansInfo () {
      return [
        {
          name: 'blacksmith',
          icon: 'hammer',
          emoji: '⚒️',
          color: '#ffb74d',
          normal: this.account.blacksmith,
          hardcore: this.account.blacksmithHardcore
        },
        {
          name: 'jeweler',
          icon: 'gem',
          emoji: '💎',
          color: '#4dd0e1',
          normal: this.account.jeweler,
          hardcore: this.account.jewelerHardcore
        },
        {
          name: 'mystic',
          icon: 'hat-wizard',
          emoji: '🔮',
          color: '#ba68c8',
          normal: this.account.mystic,
          hardcore: this.account.mysticHardcore
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
</style>
