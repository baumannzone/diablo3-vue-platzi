export default {
  methods: {
    goToHero (heroId) {
      this.$router.push({ name: 'Hero', params: { heroId } })
    }
  }
}
