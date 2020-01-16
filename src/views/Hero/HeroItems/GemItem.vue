<template>
  <img :src="gemUrl" :alt="gem.item.name" :title="gem.item.name">
</template>

<script>
export default {
  name: 'GemSlotItem',
  props: {
    gem: {
      required: true,
      type: Object
    }
  },
  computed: {
    gemUrl () {
      const host = 'http://media.blizzard.com/d3/icons/items/small/'
      return `${host}${this.gem.item.icon}.png`
    }
  }
}
</script>
