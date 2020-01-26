<template>
  <div class="container">
    <HeaderBar/>

    <transition name="fade">
      <router-view/>
    </transition>

    <FooterBar/>

  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar/Index'
import FooterBar from '@/components/FooterBar/Index'

export default {
  name: 'MainLayout',
  components: {
    HeaderBar,
    FooterBar
  }
}
</script>

<style lang="stylus">
  .fade-enter-active {
    transition: transform 1s, opacity 2s
  }

  .fade-enter {
    opacity 0
    transform: translateY(-40px)
  }
</style>
