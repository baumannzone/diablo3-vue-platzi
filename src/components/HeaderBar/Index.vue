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
            <b-nav-item-dropdown :text="regionText" right>
              <b-dropdown-item
                v-for="region in regions"
                :key="region"
                @click="changeRegion(region)"
                :active="region === selectedRegion">
                {{ region.toUpperCase() }}
              </b-dropdown-item>
            </b-nav-item-dropdown>

            <!-- Locale -->
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                {{ localeText }}
              </template>
              <b-dropdown-item
                v-for="locale in locales[selectedRegion]"
                :key="locale"
                @click="changeLocale(locale)">
                {{ locale }}
              </b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-form v-on:submit.prevent="submitForm">
              <b-input-group size="sm">
                <template v-slot:prepend>
                  <b-input-group-text class="sm">
                    <font-awesome-icon icon="search"/>
                  </b-input-group-text>
                </template>
                <b-form-input
                  size="sm"
                  class="mr-sm-2"
                  placeholder="User#1234"
                  v-model="searchText"
                  autocomplete="off"
                />
              </b-input-group>
              <b-button size="sm" class="my-2 my-sm-0" variant="primary" type="submit">Search</b-button>
            </b-nav-form>

          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import BrandTitle from './BrandTitle'

export default {
  name: 'HeaderBar',
  components: { BrandTitle },
  data () {
    return {
      regions: ['us', 'eu', 'kr', 'tw'],
      locales: {
        us: ['en_US', 'es_MX', 'pt_BR'],
        eu: ['en_GB', 'es_ES', 'fr_FR', 'ru_RU', 'de_DE', 'pt_PT', 'it_IT'],
        kr: ['ko_KR'],
        tw: ['zh_CN']
      },
      searchText: ''
    }
  },
  computed: {
    ...mapGetters([
      'selectedRegion',
      'selectedLocale',
      'playerName',
      'playerNumber'
    ]),
    regionText () {
      return `Region [${this.selectedRegion.toUpperCase()}]`
    },
    localeText () {
      return this.selectedLocale === null ? 'Locale [ ]' : `Locale [${this.selectedLocale.split('_')[1]}]`
    }
  },
  methods: {
    ...mapMutations([
      'SET_CONFIG'
    ]),
    changeRegion (val) {
      this.SET_CONFIG({ region: val, locale: null })
    },
    changeLocale (val) {
      this.SET_CONFIG({ locale: val })
    },
    submitForm () {
      console.log('BattleTag::: ', this.searchText)
    }
  }
}
</script>
