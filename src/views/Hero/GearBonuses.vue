<template>
  <div class="gear-bonuses">
    <h2 class="font-diablo">Attributes</h2>

    <hr class="bg-white">

    <div class="attributes">

      <div class="core">
        <AttributeList :attributes="coreAttributes"/>
      </div>

      <hr>

      <div class="secondary">
        <AttributeList :attributes="secondaryAttributes"/>
      </div>

    </div>

    <hr>

    <div class="resources">
      <HeroResources :resources="resources"/>
    </div>

  </div>
</template>

<script>
import AttributeList from './AttributeList'
import HeroResources from './HeroResources'

const coreAttributes = ['strength', 'dexterity', 'vitality', 'intelligence']
const secondaryAttributes = ['damage', 'toughness', 'healing']
const resources = ['life', 'primaryResource', 'secondaryResource']

export default {
  name: 'GearBonuses',
  components: { HeroResources, AttributeList },
  props: {
    stats: {
      type: Object,
      required: true
    }
  },
  computed: {
    coreAttributes () {
      return coreAttributes.map(item => ({ name: item, val: this.stats[item] }))
    },
    secondaryAttributes () {
      return secondaryAttributes.map(item => ({ name: item, val: this.stats[item] }))
    },
    resources () {
      return {
        classSlug: this.stats.classSlug,
        resources: resources.map(item => ({ name: item, val: this.stats[item] }))
      }
    }
  }
}
</script>
