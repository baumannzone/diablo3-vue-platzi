<template>
  <div class="multi-stats pl-lg-4">
    <hr class="bg-white mt-5 d-lg-none" />
    <h2 class="font-diablo my-4">Stats</h2>
    <div class="stats d-flex flex-column bg-dark p-3">
      <SingleStat
        class="mb-3"
        ico-name="skull"
        ico-color="#9E9E9E"
        :info="{value: stats.kills.monsters, text:'Lifetime Kills'}"
      />

      <SingleStat
        class="mb-3"
        ico-name="crown"
        ico-color="#ffc107"
        :info="{value: stats.kills.elites, text:'Elite Kills'}"
      />

      <SingleStat
        ico-name="dungeon"
        ico-color="#795548"
        :info="{value: stats.paragonLevel, text:'Paragon Level'}"
      />
    </div>

    <TimePlayed :timePlayed="timePlayed" />
  </div>
</template>

<script>
import { HeroData } from '@/utils/typeValidation'
import heroName from '@/mixins/heroName'
import SingleStat from './SingleStat'
import TimePlayed from './TimePlayed'

export default {
  name: 'PlayerStats',
  mixins: [heroName],
  components: { TimePlayed, SingleStat },
  props: {
    stats: {
      required: true,
      type: Object
    }
  },
  computed: {
    timePlayed () {
      return Object.keys(this.stats.timePlayed).sort().map(hero => {
        return new HeroData(this.classToName(hero), this.stats.timePlayed[hero], hero)
      })
    }
  }
}
</script>
