<template>
  <b-navbar-brand :to="{ name: 'Home' }" class="hover-cursor-pointer">
    <img src="@/assets/img/diablo-iii.svg" alt="D3" width="30">
    <span class="font-diablo ml-2">{{ title }}</span>
  </b-navbar-brand>
</template>

<script>
export default {
  name: 'BrandTitle',
  data () {
    return {
      // 🔥 Note that only variables that start with VUE_APP_ will be statically embedded
      // into the client bundle with webpack.DefinePlugin.
      title: process.env.VUE_APP_TITLE
    }
  }
}
</script>
