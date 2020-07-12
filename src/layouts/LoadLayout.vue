<template>
  <div class="loading-layout">
    <slot/>
  </div>
</template>

<script>

export default {
  name: 'LoadLayout'
}
</script>

<style lang="stylus">
.loading-layout
  min-height 100vh
  display flex
  align-items center
  justify-content center
</style>
