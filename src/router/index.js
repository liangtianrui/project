import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import myCanvas from '@/components/myCanvas'
import tabs from '@/components/tabs'
import vuxTabs from '@/components/vuxTabs'
import downloadImg from '@/components/downloadImg'
import moveLeft from '@/components/moveLeft'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vuxTabs',
      name: 'vuxTabs',
      component: vuxTabs
    },
    {
      path: '/myCanvas',
      name: 'myCanvas',
      component: myCanvas
    },
    {
      path:'/tabs',
      name: 'tabs',
      component: tabs
    },
    {
      path:'/downloadImg',
      name: 'downloadImg',
      component: downloadImg
    },
    {
      path:'/moveLeft',
      name: 'moveLeft',
      component: moveLeft
    },
  ]
})
