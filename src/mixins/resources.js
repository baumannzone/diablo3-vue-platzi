const resourcesByHero = {
  barbarian: 'fury',
  crusader: 'wrath',
  monk: 'spirit',
  wizard: 'arcane power',
  'witch-doctor': 'mana',
  necromancer: 'essence',
  'demon-hunter': ['hatred', 'discipline']
}

export default {
  methods: {
    /**
     * Get the name of the primary resource
     * @param classSlug {String}
     * @returns {*}
     */
    resourceName (classSlug) {
      return resourcesByHero[classSlug]
    }
  }
}
