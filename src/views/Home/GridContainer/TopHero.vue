<template>
  <div class="hero-portrait-wrapper">
    <div class="heroe-barbarian female"></div>
    <div class="p-2 bg-dark">
      <h5 class="m-0 text-center title-name">{{ hero.name }}</h5>
      <div class="d-flex justify-content-between border-top border-secondary pt-2 align-items-center mt-2">
        <small class="elite-kills">
          <span class="text-monospace">{{ hero.kills.elites }}</span>
          Elite <span class="d-none d-sm-inline-block">kills</span>
        </small>
        <small class="level-circle"> {{ hero.level }} </small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopHero',
  props: {
    hero: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="stylus">
  .hero-portrait-wrapper
    .title-name
      color white
      font-weight 900

    .level-circle
      width 26px
      height 26px
      padding 4px
      font-weight bold
      text-align center
      border-radius 13px
      background-color #15202b
      box-shadow 0 0 0 2px #6c757d

</style>
