export default {
  methods: {
    /**
     * Go to hero Id
     * @param heroId {String | Number}
     */
    goToHero (heroId) {
      const { region, battleTag } = this.$route.params
      this.$router.push({ name: 'Hero', params: { region, battleTag, heroId } })
    }
  }
}
