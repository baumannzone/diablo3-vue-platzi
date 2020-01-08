<template>
  <div id="app">
    <template v-if="isLoading">
      <div class="d-flex justify-content-center mt-4">
        <LoadingIcon/>
      </div>
    </template>
    <template v-else>
      <div class="container">
        <HeaderBar/>
        <router-view/>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LoadingIcon from '@/components/Loading'
import HeaderBar from '@/components/HeaderBar'

export default {
  name: 'App',
  components: {
    HeaderBar,
    LoadingIcon
  },
  computed: {
    ...mapState({
      isLoading: 'isLoading'
    })
  }
}
</script>

<style lang="stylus">
#app
  padding 60px 0
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #ffffff
  background-color: #15202b;
</style>
