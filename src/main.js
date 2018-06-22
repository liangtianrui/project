// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import { TabContainer, TabContainerItem } from 'mint-ui';
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
import 'mint-ui/lib/style.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import i18n from './assets/i18n/i18n'
Vue.use(ElementUI);

import VuePreview from 'vue-preview'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.use(VuePreview)

// with parameters install

/* eslint-disable no-new */

import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)




new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
