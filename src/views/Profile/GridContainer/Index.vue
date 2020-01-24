<template>
  <div class="grid-container">
    <div class="grid-item item-left">

      <TopHeroes v-if="hasHeroes" :heroes="topHeroes"/>

      <HeroesList v-if="hasHeroesList" :heroes="heroesList"/>

      <ProgressBosses :acts="accountData.progression"/>

    </div>

    <!-- Right Bar-->
    <div class="grid-item item-right">

      <MultiStats :stats="statsData"/>

    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

import TopHeroes from './TopHeroes/Index'
import HeroesList from './HeroesList/Index'
import ProgressBosses from './ProgressBoss'
import MultiStats from './MultiStats/Index'

export default {
  name: 'GridContainer',
  components: { MultiStats, ProgressBosses, HeroesList, TopHeroes },
  computed: {
    ...mapState('profile', [ 'accountData' ]),
    hasHeroes () {
      return this.accountData.heroes.length > 0
    },
    hasHeroesList () {
      return this.accountData.heroes.length > 3
    },
    topHeroes () {
      return this.accountData.heroes.slice(0, 3)
    },
    heroesList () {
      return this.accountData.heroes.slice(3, this.accountData.heroes.length)
    },
    statsData () {
      const { paragonLevel, kills, timePlayed } = this.accountData
      return { paragonLevel, kills, timePlayed }
    }
  }
}
</script>

<style lang="stylus">
  .grid-container
    display grid
    grid-template-columns 1fr

    .grid-item
      &.item-left
        grid-column span 1

      &.item-right
        grid-column span 1

  @media (min-width: 992px)
    .grid-container
      display grid
      grid-template-columns repeat(6, 1fr)

      .grid-item
        &.item-left
          grid-column span 4

        &.item-right
          grid-column span 2

</style>
