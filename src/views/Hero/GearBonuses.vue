<template>
  <b-col>
    <h2 class="font-diablo">Gear Bonuses</h2>

    <hr class="bg-white">

  </b-col>
</template>

<script>
export default {
  name: 'GearBonuses',
  props: {
    stats: {
      type: Object,
      required: true
    }
  }
}
</script>
