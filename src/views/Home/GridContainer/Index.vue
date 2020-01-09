<template>
  <div class="grid-container">
    <div class="grid-item item-left">

      <TopHeroes v-if="hasHeroes" :heroes="topHeroes"/>

      <HeroesList v-if="hasHeroesList" :heroes="heroesList"/>

      <div class="progression my-5">Progression</div>
    </div>
    <div class="grid-item item-right">
      <h1>Stats</h1>
      <div class="stats">
        <div class="kill"></div>
        <div class="time"></div>
      </div>
    </div>
  </div>
</template>
<script>
import data from '../../../api/data'
import TopHeroes from './TopHeroes'
import HeroesList from './HeroesList'

export default {
  name: 'GridContainer',
  components: { HeroesList, TopHeroes },
  data () {
    return {
      data: data
    }
  },
  computed: {
    hasHeroes () {
      return data.heroes.length > 0
    },
    hasHeroesList () {
      return data.heroes.length > 3
    },
    topHeroes () {
      return this.data.heroes.slice(0, 3).map(h => {
        return {
          ...h,
          kills: h.kills.elites
        }
      })
    },
    heroesList () {
      return this.data.heroes.slice(3, this.data.heroes.length)
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
