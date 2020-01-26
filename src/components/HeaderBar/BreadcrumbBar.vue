<template>
  <div class="breadcrumbs-bar" v-if="!showComponent">
    <b-breadcrumb :items="items" class="bg-transparent"/>
  </div>
</template>

<script>
const home = { text: 'Home', to: { name: 'Home' } }

export default {
  name: 'BreadcrumbBar',
  data () {
    return {
      items: []
    }
  },
  computed: {
    // Show breadcrumbs if the route is not /About or /Error
    showComponent () {
      return this.$route.name === 'About' || this.$route.name === 'Error'
    }
  },
  watch: {
    /**
     * Update breadcrumbs items when route changes
     */
    $route (to, from) {
      this.items = []
      this.updateBreadcrumbs()
    }
  },
  created () {
    this.updateBreadcrumbs()
  },
  methods: {
    updateBreadcrumbs () {
      switch (this.$route.name) {
        case 'Profile':
          this.profileCase()
          break
        case 'Hero':
          this.heroCase()
          break
        default:
          this.homeCase()
      }
    },
    homeCase () {
      this.items.push(home)
    },
    profileCase () {
      this.homeCase()
      const { battleTag, region } = this.$route.params
      this.items.push({ text: battleTag, to: { name: 'Profile', params: { region, battleTag } } })
    },
    heroCase () {
      this.profileCase()
      const { battleTag, region, heroId } = this.$route.params
      this.items.push({ text: heroId, to: { name: 'Profile', params: { region, battleTag, heroId } } })
    }
  }
}
</script>
