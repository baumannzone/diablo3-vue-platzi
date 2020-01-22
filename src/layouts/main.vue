<template>
  <div class="container">
    <HeaderBar/>
    <router-view/>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar/Index'

export default {
  name: 'MainLayout',
  components: {
    HeaderBar
  }
}
</script>

<style scoped>

</style>
