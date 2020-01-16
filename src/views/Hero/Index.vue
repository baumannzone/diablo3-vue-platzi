<template>
  <div class="hero-view">

    <HeroDetailHeader :detail="detailHeader"/>

    <b-row>
      <b-col md="12" lg="8" order-lg="2" class="border">Items</b-col>

      <b-col md="12" lg="4" order-lg="1">
        <GearBonuses :stats="detailStats"/>
      </b-col>

    </b-row>
  </div>
</template>

<script>
import h from '@/api/heroDetail.json'
import HeroDetailHeader from './HeroDetailHeader'
import GearBonuses from './GearBonuses/Index'

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
    },
    detailStats () {
      return { ...h.stats, classSlug: h.class }
    }
  }
}
</script>
