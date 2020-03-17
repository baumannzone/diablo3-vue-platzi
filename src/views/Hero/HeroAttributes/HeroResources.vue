<template>
  <div class="resource-wrapper">
    <div class="resource">
      <div class="d-flex justify-content-start align-items-center">
        <div class="resource-icon resource-life"/>
        <div class="ml-3 text-uppercase name-text">
          <span>{{ resources.resources.life.name }}</span>
        </div>
        <div class="ml-3">
          <span class="text-monospace"> {{ resources.resources.life.val | formatNumber }} </span>
        </div>
      </div>

    </div>

    <hr>

    <div class="resource">
      <div class="d-flex justify-content-start align-items-center">
        <div class="resource-icon" :class="classResourceName"/>
        <div class="ml-3 text-uppercase name-text" :class="'resource-name-' + resources.classSlug">
          <span>{{ displayResourceName }}</span>
        </div>
        <div class="ml-3">
          <span class="text-monospace">
            {{ resources.resources.primaryResource.val | formatNumber }}
          <template v-if="hasSecondaryResource">
            <span class="mx-0 text-muted">/</span>
            <span> {{ resources.resources.secondaryResource.val | formatNumber }} </span>
          </template>
          </span>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import resources from '@/mixins/resources'
import { formatNumber } from '@/filters/numeral'

export default {
  name: 'HeroResources',
  mixins: [resources],
  filters: {
    formatNumber
  },
  props: {
    resources: {
      required: true,
      type: Object
    }
  },
  computed: {
    classResourceName () {
      return `resource-${this.resourceClassName(this.resources.classSlug)}`
    },
    displayResourceName () {
      return this.resourceDisplayName(this.resources.classSlug)
    },
    hasSecondaryResource () {
      return this.resources.classSlug === 'demon-hunter'
    }
  }
}
</script>

<style lang="stylus">
  .resource
    .name-text
      color #efb45d

    .resource-name-demon-hunter
      width auto

  @media (min-width: 992px)
    .resource
      .resource-name-demon-hunter
        width 100px
</style>
