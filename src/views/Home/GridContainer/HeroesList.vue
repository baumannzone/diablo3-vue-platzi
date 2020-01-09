<template>
  <div class="heroes-list">
    <h5 class="my-5">Heroes List</h5>
  </div>
</template>

<script>
export default {
  name: 'HeroesList',
  props: {
    heroes: {
      required: true,
      type: Array
    }
  }
}
</script>

<style lang="stylus">

</style>
