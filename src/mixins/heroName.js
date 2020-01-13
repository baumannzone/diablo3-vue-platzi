import classes from '../utils/heroClasses'

export default {
  methods: {
    classToName (classSlug) {
      return classes[classSlug]
    }
  }
}
