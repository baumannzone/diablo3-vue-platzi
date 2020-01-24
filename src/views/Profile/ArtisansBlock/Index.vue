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

import ArtisanItem from './ArtisanItem'

export default {
  name: 'ArtisansBlock',
  components: { ArtisanItem },
  props: {
    artisansData: {
      type: Object,
      required: true
    }
  },
  computed: {
    artisansInfo () {
      return [
        {
          name: 'blacksmith',
          icon: 'hammer',
          emoji: '⚒️',
          color: '#ffb74d',
          normal: this.artisansData.blacksmith,
          hardcore: this.artisansData.blacksmithHardcore
        },
        {
          name: 'jeweler',
          icon: 'gem',
          emoji: '💎',
          color: '#4dd0e1',
          normal: this.artisansData.jeweler,
          hardcore: this.artisansData.jewelerHardcore
        },
        {
          name: 'mystic',
          icon: 'hat-wizard',
          emoji: '🔮',
          color: '#ba68c8',
          normal: this.artisansData.mystic,
          hardcore: this.artisansData.mysticHardcore
        }
      ]
    }
  }
}
</script>
