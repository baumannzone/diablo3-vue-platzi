const resourceClassName = {
  barbarian: 'fury',
  crusader: 'wrath',
  monk: 'spirit',
  wizard: 'arcane-power',
  'witch-doctor': 'mana',
  necromancer: 'essence',
  'demon-hunter': 'hatred-discipline'
}

const resourceDisplayName = {
  barbarian: 'Fury',
  crusader: 'Wrath',
  monk: 'Spirit',
  wizard: 'Arcane Power',
  'witch-doctor': 'Mana',
  necromancer: 'Essence',
  'demon-hunter': 'Hatred / Discipline'
}

export default {
  methods: {
    /**
     * Get the name of the primary resource
     * @param classSlug {String}
     * @returns {String}
     */
    resourceClassName (classSlug) {
      return resourceClassName[classSlug]
    },
    /**
     *
     * @param classSlug {String}
     * @returns {String}
     */
    resourceDisplayName (classSlug) {
      return resourceDisplayName[classSlug]
    }
  }
}
