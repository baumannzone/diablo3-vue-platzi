<template>
  <div>
    {{ resources.resources }}
    <div class="resource">
      <div class="resource-icon resource-life"/>
      <span> {{ resources.resources.life.val }} </span>
    </div>
    <div class="resource">
      <div class="resource-icon" :class="classResourceName"/>
      <span> {{ resources.resources.primaryResource.val }} </span>
      <template v-if="hasSecondaryResource">
        <span class="mx-2 text-muted">/</span>
        <span> {{ resources.resources.secondaryResource.val }} </span>
      </template>
    </div>
  </div>
</template>

<script>
import resources from '@/mixins/resources'

export default {
  name: 'HeroResources',
  mixins: [resources],
  props: {
    resources: {
      required: true,
      type: Object
    }
  },
  computed: {
    classResourceName () {
      return `resource-${this.resourceName(this.resources.classSlug)}`
    },
    hasSecondaryResource () {
      return this.resources.classSlug === 'demon-hunter'
    }
  }
}
</script>
