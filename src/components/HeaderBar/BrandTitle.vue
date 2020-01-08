<template>
  <b-navbar-brand>
    <span class="mr-1 font-diablo">{{ playerName }}</span>
    <small class="text-muted">
      <b>#{{playerNumber}}</b>
    </small>
  </b-navbar-brand>
</template>
<script>
export default {
  name: 'BrandTitle',
  props: {
    playerName: {
      required: true,
      type: String
    },
    playerNumber: {
      required: true,
      type: String
    }
  }
}
</script>
