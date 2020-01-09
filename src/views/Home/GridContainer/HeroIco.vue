<template>
  <div class="hero-ico">
    <span class="hero-image" :class="heroClass">
    </span>
    <span class="hero-name">
      {{ hero.name }}
    </span>
  </div>

</template>
<script>
export default {
  name: 'HeroIco',
  props: {
    hero: {
      required: true,
      type: Object
    }
  },
  computed: {
    heroClass () {
      const gender = this.hero.gender === 1 ? 'female' : 'male'
      return `heroe-${this.hero.class} ${gender}`
    }
  }
}
</script>

<style lang="stylus">
  .hero-ico
    vertical-align middle

    .hero-image
      width 30px
      height 24px
      display inline-block
      background-size 210%

    .hero-name
      height 24px
      display inline-block
</style>
