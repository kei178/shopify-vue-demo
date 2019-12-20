import Vue from 'vue'
import App from './App.vue'

// axios
import axios from "axios"

// vue-router
import VueRouter from 'vue-router'
import { routes } from './routes'
Vue.use(VueRouter)

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

// Shopify Polaris
import PolarisVue from '@eastsideco/polaris-vue'
import '@eastsideco/polaris-vue/lib/polaris-vue.css'

Vue.use(PolarisVue)

new Vue({
  el: '#app',
  router,
  axios,
  render: h => h(App)
})
