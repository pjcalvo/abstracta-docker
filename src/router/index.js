import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/Hello'
import error from '@/components/error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: hello
    },
    {
      path: '/error',
      name: 'error',
      component: error
    }
  ]
})
