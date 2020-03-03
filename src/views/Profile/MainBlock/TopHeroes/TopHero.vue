<template>
  <div class="hero-portrait-wrapper mb-5 mb-sm-0 hover-cursor-pointer" @click="goToHero(hero.id)">
    <div class="bg-secondary d-flex justify-content-center p-3 p-sm-0">
      <!-- Bg Img -->
      <div :class="heroClass"></div>
    </div>
    <div class="p-2 bg-dark">
      <h5 class="text-truncate m-0 text-center title-name font-diablo" :class="{'bg-danger': hero.hardcore}">
        {{ hero.name }}
        <img v-if="hero.seasonal" src="@/assets/img/leaf.png" width="12px">
      </h5>
      <div class="d-flex justify-content-between border-top border-secondary pt-2 align-items-center mt-2">
        <small class="elite-kills">
          <span class="text-monospace">{{ hero.kills.elites | formatNumber }}</span>
          Elite kills
        </small>
        <small class="level-circle" :class="{'text-danger': hero.dead}"> {{ hero.level }} </small>
      </div>
    </div>
  </div>
</template>

<script>
import goToHero from '@/mixins/goToHero'

import { formatNumber } from '@/filters/numeral'

export default {
  name: 'TopHero',
  mixins: [goToHero],
  filters: {
    formatNumber
  },
  props: {
    hero: {
      type: Object,
      required: true
    }
  },
  computed: {
    heroClass () {
      const gender = this.hero.gender === 0 ? 'male' : 'female'
      return `hero-${this.hero.classSlug} ${gender}`
    }
  }
}
</script>

<style lang="stylus">
  .hero-portrait-wrapper
    .title-name
      color white
      font-weight 900

    .level-circle
      width 26px
      height 26px
      padding 4px
      font-weight bold
      text-align center
      border-radius 13px
      background-color #15202b
      box-shadow 0 0 0 2px #6c757d

</style>
