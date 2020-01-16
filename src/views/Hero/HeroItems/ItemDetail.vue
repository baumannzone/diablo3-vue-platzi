<template>
  <div class="text-center">
    <div class="item-image">
      <img :src="itemUrl" alt="Img">
    </div>
    <template v-if="item.gems.length > 0">
      <h5>Gems:</h5>
      <ul class="list-inline">
        <li v-for="(gem, idx) in item.gems" :key="idx">
          <img :src="gemUrl(gem)" :alt="gem[idx].item.name" :title="gem[idx].item.name">
        </li>
      </ul>
    </template>
  </div>

</template>

<script>
export default {
  name: 'ItemDetail',
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
    }
  },
  methods: {
    /**
     * Return gem Url
     * @param gem {Object}
     * @returns {string}
     */
    gemUrl (gem) {
      const host = 'http://media.blizzard.com/d3/icons/items/small/'
      return `${host}${gem.item.icon}.png`
    }
  }
}
</script>
