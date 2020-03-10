<template>
  <div class="progress-time-played">
    <div class="d-flex justify-content-between">
      <h5 class="mb-0 font-weight-lighter"> {{heroTime.hero}} </h5>
      <span>
        <b-badge class="w-50p">{{ (heroTime.time * 100).toFixed(2) }}</b-badge>
      </span>
    </div>
    <b-progress :max="1" height="14px" class="mb-3 rounded-0">
      <b-progress-bar :value="heroTime.time" :class="classHeroBg">
        {{ heroTime.hero }}
      </b-progress-bar>
    </b-progress>
  </div>
</template>

<script>
// Custom validator
import { HeroData } from '@/utils/typeValidation'

export default {
  name: 'TimePlayedHero',
  props: {
    heroTime: {
      type: HeroData,
      required: true
    }
  },
  computed: {
    classHeroBg () {
      return `hero-bg-color-${this.heroTime.classSlug}`
    }
  }
}
</script>

<style lang="stylus" scoped>
  $heroesBg = {
    barbarian: #4e1c16,
    crusader: #795548,
    demon-hunter: #F44336,
    monk: #ff9800,
    necromancer: #00bcd4,
    witch-doctor: #8bc34a,
    wizard: #3f51b5
  }

  .progress-time-played

    h5.title
      color #000

    .w-50p
      position relative
      width 50px
      bottom -2px
      border-bottom-left-radius 0
      border-bottom-right-radius 0

    for hero, bgColor in $heroesBg
      .hero-bg-color-{hero}
        background-color bgColor

</style>
