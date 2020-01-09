<template>
  <div class="grid-container">
    <div class="grid-item item-left">
      <TopHeroes :heroes="topHeroes"/>
      <div class="list-heroes my-5">Heores list</div>
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

export default {
  name: 'GridContainer',
  components: { TopHeroes },
  data () {
    return {
      data: data
    }
  },
  computed: {
    topHeroes () {
      return this.data.heroes.slice(0, 3)
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
