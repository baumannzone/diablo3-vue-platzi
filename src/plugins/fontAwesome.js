import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faSkull, faCrown, faDungeon, faHatWizard, faHammer, faGem } from '@fortawesome/free-solid-svg-icons'
import { faVuejs, faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faSearch,
  faSkull,
  faCrown,
  faDungeon,
  faHatWizard,
  faHammer,
  faGem,
  faVuejs,
  faBootstrap
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
