import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'

import List from './components/List'
import Detail from './components/Detail'
import ListCategory from './components/ListCategory'
import ListType from './components/ListType'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

const routes = [
  { path: '/', component: List, name: 'list' },
  { path: '/detail/:id', component: Detail, name: 'detail' },
  { path: '/category/:id/elements', component: ListCategory, name: 'list-category' },
  { path: '/type/:id/elements', component: ListType, name: 'list-type' }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
