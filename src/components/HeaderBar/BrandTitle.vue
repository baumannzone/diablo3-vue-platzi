<template>
  <b-navbar-brand @click="goHome()" class="hover-cursor-pointer">
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
  },
  methods: {
    goHome () {
      this.$router.push({ name: 'Profile' })
    }
  }
}
</script>
