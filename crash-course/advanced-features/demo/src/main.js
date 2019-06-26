// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Posts from './components/Posts'
import Hello from './components/HelloWorld'
import Contact from './components/Contact'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Posts},
  {path: '/hello', component: Hello},
  {path: '/contact', component: Contact}
]

const router = new VueRouter({routes: routes})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
