<template>
  <div class="artisan-item d-flex bg-dark p-3">
    <div class="icon text-center rounded-circle bg-white">
      <font-awesome-icon :icon="artisan.icon" class="fa-2x" :style="{color: artisan.color}"/>
    </div>
    <div class="content">
      <h5 class="font-weight-bold text-capitalize"> {{ artisan.name }} </h5>
      <p class="m-0">Level {{artisan.normal.level}} (normal) </p>
      <p class="text-danger mb-0">Level {{ artisan.hardcore.level }} (hardcore) </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ArtisanItem',
  props: {
    artisan: {
      required: true,
      type: Object
    }
  }
}
</script>

<style lang="stylus" scoped>
.artisan-item
  .icon
    width 80px
</style>
