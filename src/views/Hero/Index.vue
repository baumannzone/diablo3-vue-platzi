<template>
  <div class="hero-view">

    <HeroDetailHeader :detail="detailHeader"/>

    <b-row>
      <b-col md="12" lg="8" order-lg="2">
        <HeroItems :items="items"/>
      </b-col>

      <b-col md="12" lg="4" order-lg="1">
        <GearBonuses :stats="detailStats"/>
        <Skills :skills="hero.skills"/>
      </b-col>

    </b-row>

  </div>
</template>

<script>
import { mapState } from 'vuex'

// import h from '@/api/heroDetail.json'
import items from '@/api/heroItems.json'

import HeroDetailHeader from './HeroDetailHeader'
import GearBonuses from './GearBonuses/Index'
import HeroItems from './HeroItems/Index'
import Skills from './Skills/Index'

export default {
  name: 'HeroView',
  components: { Skills, GearBonuses, HeroDetailHeader, HeroItems },
  data () {
    return {
      items
    }
  },
  computed: {
    ...mapState('profile', ['hero']),
    detailHeader () {
      const { name, class: classSlug, gender, level, hardcore, seasonal, paragonLevel, alive, seasonCreated } = this.hero
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
      return { ...this.hero.stats, classSlug: this.hero.class }
    }
  }
}
</script>
