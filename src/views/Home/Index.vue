<template>
  <div class="home-view">

    <h1 class="my-5 font-diablo">Diablo 3 Profile Finder</h1>
    <p class="lead text-muted">Enter your BattleTag and select your region to see your stats!</p>

    <MainForm/>

  </div>
</template>

<script>
import MainForm from './MainForm'

export default {
  name: 'HomeView',
  components: { MainForm }
}
</script>

<style lang="stylus" scoped>
  .home-view
    color white

</style>
