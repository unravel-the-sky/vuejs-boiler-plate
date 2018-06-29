// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import LoginWithCredentials from './components/login/LoginPageCredentials'

import LoginMainPage from './components/login/LoginPage'
import LoginWithAd from './components/login/LoginPageAd'
import LoginWithCredentials from './components/login/LoginPageCredentials'
import LoginWithEmail from './components/login/LoginPageEmail'
import LoginWithSms from './components/login/LoginPageSms'

import MainPage from './components/layout/MainPage.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueRouter)
Vue.use(VueResource)
import auth from './auth'

Vue.config.productionTip = false

const routes = [
  { path: '/home', component: MainPage},
]
// TODO: check how to do redirecting, something like:
// router.redirect({
//   '*': '/home'
// })

export const router = new VueRouter({
  routes
});

// Check the user's auth status when the app starts
// auth.checkAuth()
router.replace('/home');

const app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router
}).$mount('#app')