const names = {
  BARBARIAN: 'barbarian',
  CRUSADER: 'crusader',
  MONK: 'monk',
  WIZARD: 'wizard',
  WITCHDOCTOR: 'witch-doctor',
  NECROMANCER: 'necromancer',
  DEMONHUNTER: 'demon-hunter'
}

const resourceClassName = {
  [names.BARBARIAN]: 'fury',
  [names.CRUSADER]: 'wrath',
  [names.MONK]: 'spirit',
  [names.WIZARD]: 'arcane-power',
  [names.WITCHDOCTOR]: 'mana',
  [names.NECROMANCER]: 'essence',
  [names.DEMONHUNTER]: 'hatred-discipline'
}

const resourceDisplayName = {
  [names.BARBARIAN]: 'Fury',
  [names.CRUSADER]: 'Wrath',
  [names.MONK]: 'Spirit',
  [names.WIZARD]: 'Arcane Power',
  [names.WITCHDOCTOR]: 'Mana',
  [names.NECROMANCER]: 'Essence',
  [names.DEMONHUNTER]: 'Hatred / Discipline'
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
     * Resource Normalized name
     * @param classSlug {String}
     * @returns {String}
     */
    resourceDisplayName (classSlug) {
      return resourceDisplayName[classSlug]
    }
  }
}
