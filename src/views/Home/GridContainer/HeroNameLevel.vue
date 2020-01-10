<template>
  <div class="hero-name-level">
    <span class="font-weight-bold"> {{ classToName(hero.name) }} </span>
    <span>·</span>
    <span> {{ hero.level }} </span>
  </div>
</template>

<script>
import heroName from '@/mixins/heroName.js'

export default {
  name: 'HeroNameLevel',
  mixins: [heroName],
  props: {
    hero: {
      required: true,
      type: Object
    }
  }
}
</script>
