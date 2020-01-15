import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routerOptions = [
  { path: '/', name: 'Home' },
  { path: '/hero/:heroId', name: 'Hero' },
  { path: '/about', name: 'About' }
]

const routes = routerOptions.map(r => {
  return {
    ...r,
    component: () => import(`@/views/${r.name}/Index.vue`)
  }
})

const router = new Router({
  routes
})

export default router
