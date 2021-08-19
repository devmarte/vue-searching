import Vue from 'vue'
import VueRouter from 'vue-router'
import Version1 from '../views/Version1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Version1',
    component: Version1
  },
  {
    path: '/version2',
    name: 'Version2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Version2.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
