import Vue from 'vue'
import Router from 'vue-router'
import HelloSsr from '@/components/HelloSsr'

Vue.use(Router)

export function CreateRouter () {
  return new Router({
    mode: 'history',
    routes: [{
      path: '/ssr',
      name: 'HelloSsr',
      component: HelloSsr
    }]
  })
}

