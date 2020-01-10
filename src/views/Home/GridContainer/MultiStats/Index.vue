<template>
  <div class="multi-stats pl-lg-4">
    <h2 class="font-diablo my-4">Stats</h2>
    <div class="stats d-flex flex-column bg-dark p-3">
      <SingleStat
        class="mb-3"
        ico-name="skull"
        ico-color="#9E9E9E"
        :info="{value: stats.kills.monsters, text:'Lifetime Kills'}" />

      <SingleStat
        class="mb-3"
        ico-name="crown"
        ico-color="#ffc107"
        :info="{value: stats.kills.elites, text:'Elite Kills'}"/>

      <SingleStat
        ico-name="dungeon"
        ico-color="#795548"
        :info="{value: stats.paragonLevel, text:'Paragon Level'}"/>

    </div>
    <div class="time-played"></div>
  </div>
</template>

<script>
import SingleStat from './SingleStat'

export default {
  name: 'MultiStats',
  components: { SingleStat },
  props: {
    stats: {
      required: true,
      type: Object
    }
  },
  directives: {
    focus: {
      // directive definition
      inserted (el) {
        console.log(el)
      }
    }
  }
}
</script>
