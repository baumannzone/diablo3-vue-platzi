<template>
  <div class="text-center">

    <div v-if="item" class="item-image">
      <img :src="itemUrl" alt="Img">
    </div>

    <template v-if="itemHasGems">
      <h6>Gems:</h6>
      <ul class="list-inline">
        <li v-for="(gem, index) in item.gems" :key="index" class="list-inline-item">
          <GemItem :gem="gem"/>
        </li>
      </ul>
    </template>

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
    }
  },
  computed: {
    itemUrl () {
      const host = 'http://media.blizzard.com/d3/icons/items/large/'
      return `${host}${this.item.icon}.png`
    },
    itemHasGems () {
      return this.item.hasOwnProperty('gems')
    }
  }
}
</script>
