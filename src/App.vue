<template>
  <div id="app">
    <template v-if="isLoading">
      <div class="d-flex justify-content-center mt-4">
        <LoadingIcon/>
      </div>
    </template>
    <template v-else>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view/>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LoadingIcon from '@/components/Loading'

export default {
  name: 'App',
  components: {
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
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
