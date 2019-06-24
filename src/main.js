// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSession from 'vue-session'
import VueResource from 'vue-resource'

Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.use(VueSession)
Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.mixin({
  methods: {
    verifyBrowser: function () {
      if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        return false
      } else if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1 && navigator.userAgent.toLowerCase().indexOf('73') > -1) {
        return false
      }
      return true
    }
  }
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
