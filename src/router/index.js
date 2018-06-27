import Vue from 'vue'
import Router from 'vue-router'
import pages from './pages'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: pages.index,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/myCanvas',
      name: 'myCanvas',
      component: pages.myCanvas,
      meta: {
        title: 'canvas刮奖'
      }
    },
    {
      path: '/downloadImg',
      name: 'downloadImg',
      component: pages.downloadImg,
      meta: {
        title: 'canvas下载图片'
      }
    },
    {
      path: '/moveLeft',
      name: 'moveLeft',
      component: pages.moveLeft,
      meta: {
        title: '匀速向左运动'
      }
    },
    {
      path: '/hover',
      name: 'hover',
      component: pages.hover,
      meta: {
        title: '鼠标悬停效果'
      }
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: pages.swiper,
      meta: {
        title: '轮播图'
      }
    },
    {
      path: '/preview',
      name: 'preview',
      component: pages.preview,
      meta: {
        title: '查看图片'
      }
    },
  ]
})

router.beforeEach((to, from, next) => {

  if (to.matched.some(res => res.meta.title)) {
    document.title = to.meta.title
  }
  next()
})

export default router
