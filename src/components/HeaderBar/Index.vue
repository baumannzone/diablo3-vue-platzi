<template>
  <div class="header-bar">
    <div class="navigation-bar">
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <BrandTitle/>
        <b-badge
          id="currentSeason"
          class="ml-auto"
          variant="secondary"
        >
          {{ currentSeason }}
        </b-badge>

        <b-tooltip target="currentSeason" triggers="hover" placement="left">
          <small>Current season</small>
        </b-tooltip>

      </b-navbar>
    </div>

    <BreadcrumbBar/>

  </div>
</template>

<script>
import { listSeasons } from '@/api/season'
import BrandTitle from './BrandTitle'
import BreadcrumbBar from './BreadcrumbBar'

export default {
  name: 'HeaderBar',
  components: { BreadcrumbBar, BrandTitle },
  data () {
    return {
      currentSeason: null
    }
  },
  created () {
    const region = 'eu'
    this.fetchSeasons(region)
  },
  methods: {
    fetchSeasons (region) {
      listSeasons(region)
        .then(({ data }) => {
          this.currentSeason = data.current_season
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
