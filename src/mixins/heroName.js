const items = {
  barbarian: 'Barbarian',
  monk: 'Monk',
  wizard: 'Wizard',
  crusader: 'Crusader',
  'witch-doctor': 'Witch Doctor',
  'demon-hunter': 'Demon Hunter'
}

export default {
  computed: {
    classToName (classSlug) {
      return items[classSlug]
    }
  }
}
