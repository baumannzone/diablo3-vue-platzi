<template>
  <img :src="gemUrl" :alt="gem.item.name" :title="gemTitle">
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
    },
    gemTitle () {
      return `${this.gem.item.name}\n\n${this.gem.attributes}`
    }
  }
}
</script>
