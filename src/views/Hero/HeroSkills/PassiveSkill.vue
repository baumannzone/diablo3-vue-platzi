<template>
  <div class="d-flex align-items-center mb-3">
    <div class="mr-2">
      <img :src="skillUrl" :alt="skill.name">
    </div>

    <div>
      <p class="skill-name m-0" :title="skill.description">
        {{ skill.name }}
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'PassiveSkill',
  props: {
    skill: {
      required: true,
      type: Object
    }
  },
  computed: {
    skillUrl () {
      const sizes = {
        21: 21,
        42: 42,
        64: 64
      }
      // const baseUrl = 'http://media.blizzard.com/'
      // La nueva url tiene certificado SSL (https),
      // así que el navegador las muestra sin problemas en producción.
      const baseUrl = 'https://blzmedia-a.akamaihd.net/'
      const host = `${baseUrl}d3/icons/skills/${sizes[42]}/`
      return `${host}${this.skill.icon}.png`
    }
  }
}
</script>
