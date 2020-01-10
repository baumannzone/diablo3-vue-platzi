<template>
  <div class="hero-ico d-flex align-items-center">
    <span class="hero-image border" :class="heroClassImg"></span>
    <span class="hero-name ml-2 font-weight-bold" :class="{'text-danger': hero.dead}">
      {{ hero.name }}
    </span>
    <img v-if="hero.seasonal" src="@/assets/img/leaf.png" width="12px" class="ml-2">
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
    heroClassImg () {
      const gender = this.hero.gender === 1 ? 'female' : 'male'
      const dead = this.hero.dead ? 'border-danger' : ''
      return `heroe-${this.hero.class} ${gender} ${dead}`
    }
  }
}
</script>

<style lang="stylus">
  .hero-ico
    vertical-align middle

    .hero-image
      width 30px
      height 26px
      display inline-block
      background-size 210%

    .hero-name
      height 24px
      display inline-block
</style>
