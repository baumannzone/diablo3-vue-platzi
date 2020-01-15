<template>
  <div class="hero-view">

    <HeroDetailHeader :detail="detailHeader"/>

    <b-row>
      <GearBonuses/>
      <b-col class="border">2</b-col>
    </b-row>
  </div>
</template>

<script>
import h from '@/api/heroDetail.json'
import HeroDetailHeader from './HeroDetailHeader'
import GearBonuses from './GearBonuses'

export default {
  name: 'HeroView',
  components: { GearBonuses, HeroDetailHeader },
  data () {
    return {
      h
    }
  },
  computed: {
    detailHeader () {
      const { name, class: classSlug, gender, level, hardcore, seasonal, paragonLevel, alive, seasonCreated } = h
      return {
        name,
        classSlug,
        gender,
        level,
        hardcore,
        seasonal,
        paragonLevel,
        alive,
        seasonCreated
      }
    }
  }
}
</script>
