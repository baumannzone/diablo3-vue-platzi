<template>
  <b-navbar-brand :to="{ name: 'Home' }" class="hover-cursor-pointer">
    <img src="@/assets/img/diablo-iii.svg" alt="D3" width="30">
    <span class="font-diablo ml-2">D3PF</span>
  </b-navbar-brand>
</template>

<script>
export default {
  name: 'BrandTitle'
}
</script>
