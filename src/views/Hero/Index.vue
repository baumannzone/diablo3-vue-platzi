<template>
  <div class="hero-view">
    <HeroDetailHeader/>

    <b-row>
      <b-col class="border">1</b-col>
      <b-col class="border">2</b-col>
    </b-row>
  </div>
</template>

<script>
import HeroDetailHeader from './HeroDetailHeader'

export default {
  name: 'HeroView',
  components: { HeroDetailHeader },
  data () {
    return {}
  }
}
</script>
