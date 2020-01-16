<template>
  <div class="text-center bg-dark h-100 pt-3">

    <div class="d-flex flex-column justify-content-between h-100">
      <div>
        <div v-if="item" class="item-image">
          <p class="text-muted">{{ item.name }}</p>
          <img :src="itemUrl" alt="Img">
        </div>
      </div>

      <div>
        <template v-if="itemHasGems">
          <small >Gems:</small>
          <ul class="list-inline">
            <li v-for="(gem, index) in item.gems" :key="index" class="list-inline-item">
              <GemItem :gem="gem"/>
            </li>
          </ul>
        </template>
      </div>
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
