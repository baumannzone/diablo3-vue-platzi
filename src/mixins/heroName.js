const classes = {
  barbarian: 'Barbarian',
  monk: 'Monk',
  wizard: 'Wizard',
  crusader: 'Crusader',
  'witch-doctor': 'Witch Doctor',
  'demon-hunter': 'Demon Hunter'
}

export default {
  methods: {
    classToName (classSlug) {
      return classes[classSlug]
    }
  }
}
