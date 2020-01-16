<template>
  <div class="kanais-wrapper mt-5">
    <h2 class="font-diablo">KANAI'S CUBE POWERS</h2>
    <hr class="bg-white">
  </div>
</template>

<script>
export default {
  name: 'KanaisCube',
  props: {
    powers: {
      type: Object,
      required: true
    }
  }
}
</script>
