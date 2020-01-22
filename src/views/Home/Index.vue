<template>
  <div class="home-view">

    <h1>Profile Finder</h1>

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
