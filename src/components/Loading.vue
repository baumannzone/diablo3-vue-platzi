<template>
  <div class="d-flex">
    <div class="loading-spinner">
      <!--<font-awesome-icon icon="spinner" class="fa-spin fa-3x text-info"/>-->
      <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner" type="grow" variant="info"/>
      <h3 class="mt-5">Loading...</h3>
    </div>
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
