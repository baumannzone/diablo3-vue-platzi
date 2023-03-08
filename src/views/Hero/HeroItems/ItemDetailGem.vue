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
      // Cambio de 'large' por 'small'
      // const baseUrl = 'http://media.blizzard.com/'
      // La nueva url tiene certificado SSL (https),
      // así que el navegador las muestra sin problemas en producción.
      const baseUrl = 'https://blzmedia-a.akamaihd.net/'
      const host = `${baseUrl}d3/icons/items/small/`
      return `${host}${this.gem.item.icon}.png`
    },
    gemTitle () {
      return `${this.gem.item.name}\n\n${this.gem.attributes}`
    }
  }
}
</script>
