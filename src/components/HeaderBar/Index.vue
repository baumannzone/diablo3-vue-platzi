<template>
  <div class="header-bar">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <BrandTitle :player-name="playerName" :player-number="playerNumber"/>

        <b-navbar-toggle target="nav-collapse"/>

        <b-collapse id="nav-collapse" is-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            Hi
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BrandTitle from './BrandTitle'

export default {
  name: 'HeaderBar',
  components: { BrandTitle },
  computed: {
    ...mapGetters([
      'playerName',
      'playerNumber'
    ])
  }
}
</script>
