<template>
  <div class="hero-view">
    <b-breadcrumb :items="items" class="bg-transparent"/>
  </div>
</template>

<script>
export default {
  name: 'HeroView',
  data () {
    return {
      items: [
        {
          text: 'SuperRambo#2613',
          to: { name: 'Home' }
        },
        {
          text: '[CR] ElMicroYyo',
          active: true
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
