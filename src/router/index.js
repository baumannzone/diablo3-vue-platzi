import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routOptions = [
  { path: '/', name: 'Home' },
  { path: '/:region/profile/:battleTag', name: 'Profile' },
  { path: '/:region/profile/:battleTag/hero/heroId', name: 'Hero' },
  { path: '/about', name: 'About' }
]

const routes = routOptions.map(r => {
  return {
    ...r,
    component: () => import(`@/views/${r.name}/Index.vue`)
  }
})

const router = new Router({
  routes
})

export default router
