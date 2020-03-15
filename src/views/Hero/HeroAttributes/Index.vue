<template>
  <div class="h-attriubutes">
    <h2 class="font-diablo">Attributes</h2>

    <hr class="bg-white">

    <div class="attributes">

      <div class="core">
        <HeroAttributeList :attributes="coreAttributes"/>
      </div>

      <hr>

      <div class="secondary">
        <HeroAttributeList :attributes="secondaryAttributes"/>
      </div>

    </div>

    <hr>

    <div class="resources">
      <HeroResources :resources="resources"/>
    </div>

  </div>
</template>

<script>

import HeroAttributeList from './HeroAttributeList'
import HeroResources from './HeroResources'

const coreAttributes = ['strength', 'dexterity', 'vitality', 'intelligence']
const secondaryAttributes = ['damage', 'toughness', 'healing']
const resources = ['life', 'primaryResource', 'secondaryResource']

export default {
  name: 'HeroAttributes',
  components: { HeroResources, HeroAttributeList },
  props: {
    attributes: {
      type: Object,
      required: true
    }
  },
  computed: {
    coreAttributes () {
      return coreAttributes.map(item => ({ name: item, val: this.attributes[item] }))
    },
    secondaryAttributes () {
      return secondaryAttributes.map(item => ({ name: item, val: this.attributes[item] }))
    },
    resources () {
      const data = {
        classSlug: this.attributes.classSlug,
        resources: {}
      }
      resources.forEach(item => {
        data.resources[item] = { name: item, val: this.attributes[item] }
      })
      return data
    }
  }
}
</script>
