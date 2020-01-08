<template>
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
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'LocaleDropDown',
  data () {
    return {
      locales: {
        us: ['en_US', 'es_MX', 'pt_BR'],
        eu: ['en_GB', 'es_ES', 'fr_FR', 'ru_RU', 'de_DE', 'pt_PT', 'it_IT'],
        kr: ['ko_KR'],
        tw: ['zh_CN']
      }
    }
  },
  computed: {
    ...mapGetters([
      'selectedRegion',
      'selectedLocale'
    ]),
    localeText () {
      return this.selectedLocale === null ? 'Locale [ ]' : `Locale [${this.selectedLocale.split('_')[1]}]`
    }
  },
  methods: {
    ...mapMutations([
      'SET_CONFIG'
    ]),
    changeLocale (val) {
      this.SET_CONFIG({ locale: val })
    }
  }
}
</script>
