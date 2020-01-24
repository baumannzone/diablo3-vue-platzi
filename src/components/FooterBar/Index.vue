<template>
  <footer class="footer-bar text-center mt-5">
    <p class="text-muted">Powered by</p>

    <ul class="list-inline">
      <li class="list-inline-item mx-2" v-for="(icon, idx) in icons" :key="idx">
        <a :href="icon.href" target="_blank" :title="icon.href">
          <font-awesome-icon :icon="icon.classes" class="fa-lg" :style="{'color': icon.color}"/>
        </a>
      </li>
    </ul>

    <hr>

    <p class="text-muted">
      <small>
        Made by
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
        },
        {
          classes: [ 'fab', 'battle-net' ],
          href: 'https://develop.battle.net/documentation/diablo-3/community-apis'
        },
        {
          classes: [ 'fab', 'github' ],
          color: '#e4e4e4',
          href: 'https://github.com/baumannzone'
        },
        {
          classes: [ 'fab', 'font-awesome' ],
          color: '#0e95ff',
          href: 'https://fontawesome.com/'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
