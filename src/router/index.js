import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Datenschutz from '../views/Datenschutz.vue'
import Impressum from '../views/Impressum.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/datenschutz',
    name: 'Datenschutz',
    component: Datenschutz
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: Impressum
  },
]



const router = new VueRouter({
  scrollBehavior(to) {
        if (to.hash) {
            return window.scrollTo({ top: document.querySelector(to.hash).offsetTop, behavior: 'smooth' });
        }
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  routes,

})

export default router
