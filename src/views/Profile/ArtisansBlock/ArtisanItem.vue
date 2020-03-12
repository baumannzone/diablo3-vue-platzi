<template>
  <div class="artisan-item d-flex bg-dark p-3 mb-2 rounded">

    <!-- Icono / Emoji -->
    <div class="icon d-flex justify-content-center align-items-center rounded-circle mr-2">
      <!--<font-awesome-icon :icon="artisan.icon" class="fa-2x" :style="{color: artisan.color}"/>-->
      <span class="display-4">{{ artisan.emoji}}</span>
    </div>

    <div class="content">
      <h5 class="font-weight-bold text-capitalize"> {{ artisan.name }} </h5>

      <p v-if="artisan.normal.level" class="m-0 font-weight-normal">
        Level {{artisan.normal.level}} (normal)
      </p>

      <p v-if="artisan.hardcore.level" class="mb-0 font-weight-normal text-muted">
        Level {{ artisan.hardcore.level }}
        <span class="text-danger">(hardcore)</span>
      </p>
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
      height 80px
      background-color #404850

</style>
