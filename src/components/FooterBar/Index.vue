<template>
  <footer class="footer-bar text-center">
    <p class="text-muted">Powered by</p>
    <ul class="list-inline">
      <li class="list-inline-item">
        <a href="#">
          <font-awesome-icon :icon="['fab', 'vuejs']" />
        </a>
      </li>
      <li class="list-inline-item">
        <a href="#">
          <font-awesome-icon :icon="['fab', 'bootstrap']" />
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar'
}
</script>

<style scoped>

</style>
