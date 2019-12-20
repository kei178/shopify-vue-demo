import Vue from 'vue'
import App from './App.vue'

// vue-router
import VueRouter from 'vue-router'
import { routes } from './routes'
Vue.use(VueRouter)

// axios
import axios from "axios"

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (_to, _from, _savedPosition) {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 200)
    })
  }
})

new Vue({
  el: '#app',
  router,
  axios,
  render: h => h(App)
})
