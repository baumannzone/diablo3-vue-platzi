<template>
  <div class="hero-view">

    <BaseLoading v-if="isLoadingHero"/>

    <HeroDetailHeader v-if="hero" :detail="detailHeader"/>

    <b-row>
      <b-col md="12" lg="8" order-lg="2">
        <BaseLoading v-if="isLoadingItems"/>
        <HeroItems v-if="items" :items="items"/>
      </b-col>

      <b-col md="12" lg="4" order-lg="1">
        <template v-if="hero">
          <GearBonuses :stats="detailStats"/>
          <Skills :skills="hero.skills"/>
        </template>
      </b-col>

    </b-row>

  </div>
</template>

<script>
import setError from '@/mixins/setError'
import BaseLoading from '@/components/BaseLoading'
import { getApiHero, getApiDetailedHeroItems } from '@/api/search'
import HeroDetailHeader from './HeroDetailHeader'
import GearBonuses from './GearBonuses/Index'
import HeroItems from './HeroItems/Index'
import Skills from './Skills/Index'

export default {
  name: 'HeroView',
  mixins: [setError],
  components: { BaseLoading, Skills, GearBonuses, HeroDetailHeader, HeroItems },
  data () {
    return {
      isLoadingHero: false,
      isLoadingItems: false,
      hero: null,
      items: null
    }
  },
  computed: {
    detailHeader () {
      const {
        name,
        class: classSlug,
        gender,
        level,
        hardcore,
        seasonal,
        paragonLevel,
        alive,
        seasonCreated
      } = this.hero

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
    this.isLoadingHero = true
    this.isLoadingItems = true
    const { region, battleTag: account, heroId } = this.$route.params

    getApiHero({ region, account, heroId })
      .then(({ data }) => {
        this.hero = data
      })
      .catch((err) => {
        this.hero = null
        const errObj = {
          routeParams: this.$route.params,
          message: err.message
        }
        if (err.response) {
          errObj.data = err.response.data
          errObj.status = err.response.status
        }
        this.setApiErr(errObj)
        this.$router.push({ name: 'Error' })
      })
      .finally(() => {
        this.isLoadingHero = false
      })

    getApiDetailedHeroItems({ region, account, heroId })
      .then(({ data }) => {
        this.items = data
      })
      .catch((err) => {
        this.items = null
        console.log(err)
      })
      .finally(() => {
        this.isLoadingItems = false
      })
  }
}
</script>
