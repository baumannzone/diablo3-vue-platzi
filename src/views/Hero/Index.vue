<template>
  <div class="hero-view">

    <template v-if="hero">

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

    </template>

  </div>
</template>

<script>
import { getApiHero, getApiDetailedHeroItems } from '@/api/search'

import HeroDetailHeader from './HeroDetailHeader'
import GearBonuses from './GearBonuses/Index'
import HeroItems from './HeroItems/Index'
import Skills from './Skills/Index'

export default {
  name: 'HeroView',
  components: { Skills, GearBonuses, HeroDetailHeader, HeroItems },
  data () {
    return {
      hero: null,
      items: null
    }
  },
  computed: {
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
  },
  created () {
    const { region, battleTag: account, heroId } = this.$route.params

    getApiHero({ region, account, heroId })
      .then(({ data }) => {
        console.log(data)
        this.hero = data
      })
      .catch((err) => {
        this.hero = null
        console.log(err)
      })

    getApiDetailedHeroItems({ region, account, heroId })
      .then(({ data }) => {
        console.log(data)
        this.items = data
      })
      .catch((err) => {
        this.items = null
        console.log(err)
      })
  }
}
</script>
