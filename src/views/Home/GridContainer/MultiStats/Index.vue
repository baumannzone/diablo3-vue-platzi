<template>
  <div class="multi-stats pl-lg-4">
    <h2 class="font-diablo my-4">Stats</h2>
    <div class="stats d-flex flex-column flex-md-row flex-lg-column bg-dark p-3">
      <SingleStat ico-name="skull"/>
      <SingleStat ico-name="crown"/>
      <SingleStat ico-name="award"/>
    </div>
    <div class="time-played"></div>
  </div>
</template>

<script>
import SingleStat from './SingleStat'

export default {
  name: 'MultiStats',
  components: { SingleStat }
}
</script>
