<template>
  <div class="header-bar">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <BrandTitle :player-name="playerName" :player-number="playerNumber"/>

        <b-navbar-toggle target="nav-collapse"/>

        <b-collapse id="nav-collapse" is-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <!-- Region -->
            <RegionDropDown/>

            <!-- Locale -->
            <LocaleDropDown/>

            <!-- SearchForm -->
            <BattleTagForm/>

          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BrandTitle from './BrandTitle'
import RegionDropDown from './RegionDropDown'
import LocaleDropDown from './LocaleDropDown'
import BattleTagForm from './BattleTagForm'

export default {
  name: 'HeaderBar',
  components: { BattleTagForm, LocaleDropDown, RegionDropDown, BrandTitle },
  computed: {
    ...mapGetters([
      'playerName',
      'playerNumber'
    ])
  }
}
</script>
