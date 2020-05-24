<template>
  <div class="hero-view">

    <BaseLoading v-if="isLoading"/>

    <HeroDetailHeader v-if="hero" :detail="detailHeader"/>

    <b-row>
      <b-col md="12" lg="8" order-lg="2">
        <BaseLoading v-if="isLoading"/>
        <HeroItems v-if="items" :items="items"/>
      </b-col>

      <b-col md="12" lg="4" order-lg="1">
        <template v-if="hero">
          <HeroAttributes :attributes="detailStats"/>
          <HeroSkills :skills="hero.skills"/>
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
import HeroAttributes from './HeroAttributes/Index'
import HeroItems from './HeroItems/Index'
import HeroSkills from './HeroSkills/Index'

export default {
  name: 'HeroView',
  mixins: [setError],
  components: { BaseLoading, HeroSkills, HeroAttributes, HeroDetailHeader, HeroItems },
  data () {
    return {
      isLoading: false,
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
    this.isLoading = true
    const { region, battleTag: account, heroId } = this.$route.params

    Promise.all([
      getApiHero({ region, account, heroId }),
      getApiDetailedHeroItems({ region, account, heroId })
    ])
      .then(([{ data: hero }, { data: items }]) => {
        this.hero = hero
        this.items = items
      })
      .catch((err) => {
        this.hero = null
        this.items = null

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
        this.isLoading = false
      })
  }
}
</script>
