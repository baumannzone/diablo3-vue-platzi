<template>
  <div class="header-bar">
    <div class="navigation-bar">
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <BrandTitle/>
      </b-navbar>
    </div>
    <BreadcrumbBar/>
  </div>
</template>

<script>
import BrandTitle from './BrandTitle'
import BreadcrumbBar from './BreadcrumbBar'

export default {
  name: 'HeaderBar',
  components: { BreadcrumbBar, BrandTitle }
}
</script>
