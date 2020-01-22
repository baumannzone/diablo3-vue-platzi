<template>
  <div id="app">

    <LoadLayout v-if="isLoading">
      <BaseLoading/>
    </LoadLayout>

    <v-layout v-else/>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import VLayout from '@/layouts/Main.vue'
import LoadLayout from '@/layouts/Load.vue'
import BaseLoading from '@/components/BaseLoading.vue'

export default {
  name: 'App',
  components: {
    VLayout,
    LoadLayout,
    BaseLoading
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
