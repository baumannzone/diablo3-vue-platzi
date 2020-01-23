<template>
  <footer class="footer-bar text-center">
    <p class="text-muted">Powered by</p>
    <ul class="list-inline">
      <li class="list-inline-item" v-for="(icon, idx) in icons" :key="idx">
        <a :href="icon.href" target="_blank">
          <font-awesome-icon :icon="icon.classes" class="fa-lg" :style="{'color': icon.color}"/>
        </a>
      </li>
    </ul>

    <hr>

    <p class="text-muted">
      <small>
        Made by:
        <a href="https://twitter.com/baumannzone" target="_blank">Jorge Baumann</a>
        for
        <a href="https://platzi.com/" target="_blank">Platzi</a>
      </small>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar',
  data () {
    return {
      icons: [
        {
          classes: [ 'fab', 'vuejs' ],
          color: '#4fc08d',
          href: 'https://vue.js.org/'
        },
        {
          classes: [ 'fab', 'bootstrap' ],
          color: '#7952b3',
          href: 'https://bootstrap-vue.js.org/'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
