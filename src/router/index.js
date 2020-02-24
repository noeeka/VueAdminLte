import Vue from 'vue'
import Router from 'vue-router'
import product from '@/components/product'
import test from '@/components/test'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'App',
    //   component: App
    // },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/test',
      name: 'test',
      component: test,
      template:'<Test/>'
    }
  ]
})
