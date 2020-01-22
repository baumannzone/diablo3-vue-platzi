<template>
  <div class="home-view">

    <HomeTitle/>

    <MainForm/>

  </div>
</template>

<script>
import MainForm from './MainForm'
import HomeTitle from './HomeTitle'

export default {
  name: 'HomeView',
  components: { HomeTitle, MainForm }
}
</script>

<style lang="stylus" scoped>
  .home-view
    color white

</style>
