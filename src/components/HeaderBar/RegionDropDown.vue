<template>
  <b-nav-item-dropdown :text="regionText" right>
    <b-dropdown-item
      v-for="region in regions"
      :key="region"
      @click="changeRegion(region)"
      :active="region === selectedRegion">
      {{ region.toUpperCase() }}
    </b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'RegionDropDown',
  data () {
    return {
      regions: ['us', 'eu', 'kr', 'tw']
    }
  },
  computed: {
    ...mapGetters([
      'selectedRegion'
    ]),
    regionText () {
      return `Region [${this.selectedRegion.toUpperCase()}]`
    }
  },
  methods: {
    ...mapMutations([
      'SET_CONFIG'
    ]),
    changeRegion (val) {
      this.SET_CONFIG({ region: val, locale: null })
    }
  }

}
</script>
