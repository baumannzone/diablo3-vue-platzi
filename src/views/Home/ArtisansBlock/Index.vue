<template>
  <div class="artisan-list">
    <hr class="bg-light my-5">
    <h3 class="font-diablo">Artisans</h3>
    <b-row>
      <b-col lg="4" v-for="artisan in artisansInfo" :key="artisan.name">
        <ArtisanItem :artisan="artisan"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import data from '@/api/data'
import ArtisanItem from './ArtisanItem'

export default {
  name: 'ArtisansBlock',
  components: { ArtisanItem },
  // props: {
  //   artisans: {
  //     type: Object,
  //     required: true
  //   }
  // }
  computed: {
    artisansInfo () {
      return [
        {
          name: 'blacksmith',
          icon: 'hammer',
          color: 'blue',
          normal: data.blacksmith,
          hardcore: data.blacksmithHardcore
        },
        {
          name: 'jeweler',
          icon: 'gem',
          color: 'pink',
          normal: data.jeweler,
          hardcore: data.jewelerHardcore
        },
        {
          name: 'mystic',
          icon: 'hat-wizard',
          color: 'red',
          normal: data.mystic,
          hardcore: data.mysticHardcore
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
</style>
