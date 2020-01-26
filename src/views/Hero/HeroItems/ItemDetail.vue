<template>
  <div class="text-center bg-dark h-100 pt-3 d3-icon-item" :class="itemClassColor">

    <div class="d-flex flex-column justify-content-between h-100">
      <template v-if="item">
        <div>
          <div v-if="item" class="item-image">
            <p class="text-muted">{{ item.name }}</p>
            <img :src="itemUrl" alt="Img">
          </div>
        </div>

        <div>
          <template v-if="itemHasGems">
            <small>{{ gemOrJewel }}:</small>
            <ul class="list-inline">
              <li v-for="(gem, index) in item.gems" :key="index" class="list-inline-item">
                <GemItem :gem="gem"/>
              </li>
            </ul>
          </template>
        </div>
      </template>
      <template v-else>
        <p class="text-secondary">
          {{slotName}}
        </p>
      </template>
    </div>

  </div>

</template>

<script>
import GemItem from './GemItem'

export default {
  name: 'ItemDetail',
  components: { GemItem },
  props: {
    item: {
      type: Object,
      required: true
    },
    slotName: {
      required: true,
      type: String
    }
  },
  computed: {
    itemUrl () {
      const host = 'http://media.blizzard.com/d3/icons/items/large/'
      return `${host}${this.item.icon}.png`
    },
    itemHasGems () {
      return this.item.hasOwnProperty('gems')
    },
    gemOrJewel () {
      return this.item.gems[0].isGem ? 'Gems' : 'Jewel'
    },
    itemClassColor () {
      if (this.item) {
        return `item-${this.item.displayColor}`
      }
      return 'item-none'
    }
  }
}
</script>

<style lang="stylus">
  .d3-icon-item
    min-height 100px
    border-top-style solid
    border-top-width 4px

    &.item-none
      border-color transparent

    &.item-green
      border-color #8bc34a

    &.item-orange
      border-color #ff9800

    &.item-yellow
      border-color #ffeb3b

    &.item-blue
      border-color #03a9f4

    &.item-white
      border-color #a0aab5

</style>
