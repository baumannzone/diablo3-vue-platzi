<template>
  <div class="header-bar">
    <div>
      <b-navbar toggleable="md" type="dark" variant="dark">
        <b-navbar-brand href="#">
          <span class="mr-2">SuperRambo</span>
          <small class="text-muted">
            <b>#2613</b>
          </small>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"/>

        <b-collapse id="nav-collapse" is-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown :text="regionText" right>
              <b-dropdown-item
                v-for="region in regions"
                :key="region"
                @click="changeRegion(region)"
                :active="region === selectedRegion">
                {{ region.toUpperCase() }}
              </b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                {{ localeText }}
              </template>
              <b-dropdown-item v-for="locale in locales[selectedRegion]" :key="locale" @click="changeLocale(locale)"> {{
                locale }}
              </b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-form>
              <b-input-group size="sm">
                <template v-slot:prepend>
                  <b-input-group-text>
                    <font-awesome-icon icon="search"/>
                  </b-input-group-text>
                </template>
                <b-form-input size="sm" class="mr-sm-2" placeholder="User#1234" v-model="searchText"/>
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

export default {
  name: 'HeaderBar',
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
      'selectedLocale'
    ]),
    regionText () {
      return `Region [${this.selectedRegion.toUpperCase()}]`
    },
    localeText () {
      return `Locale [${this.selectedLocale.split('_')[1]}]`
    }
  },
  methods: {
    ...mapMutations([
      'SET_CONFIG'
    ]),
    changeRegion (val) {
      this.SET_CONFIG({ region: val })
    },
    changeLocale (val) {
      this.SET_CONFIG({ locale: val })
    }
  }
}
</script>
