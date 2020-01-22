<template>
  <div class="loading-wrapper text-center py-5">
    <div class="spinner-wrapper w-100">
      <b-spinner class="spinner" label="Loading..." type="grow" variant="info"/>
    </div>
    <h1 class="my-5">Loading...</h1>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    size: {
      type: Number,
      required: false,
      default: 80
    }
  }
}
</script>

<style lang="stylus">
  .spinner-wrapper
    .spinner
      width 4rem
      height 4rem

</style>
