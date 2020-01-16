<template>
  <div>
    <h2 class="font-diablo">Attributes</h2>

    <hr class="bg-white">

    <div class="attributes">

      <div class="core">
        <ul v-for="attr in coreAttributes" :key="attr.name">
          <li>{{ attr }}</li>
        </ul>
      </div>

      <hr>

      <div class="secondary">
        <ul v-for="attr in secondaryAttributes" :key="attr.name">
          <li>{{ attr }}</li>
        </ul>
      </div>

    </div>

    <hr>

    <div class="resources">
      <ul v-for="res in resources" :key="res.name">
        <li>{{ res }}</li>
      </ul>
    </div>

  </div>
</template>

<script>
const coreAttributes = ['strength', 'dexterity', 'vitality', 'intelligence']
const secondaryAttributes = ['damage', 'toughness', 'healing']
const resources = ['life', 'primaryResource', 'secondaryResource']

export default {
  name: 'GearBonuses',
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
      return resources.map(item => ({ name: item, val: this.stats[item] }))
    }
  }
}
</script>
