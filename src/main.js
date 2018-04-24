// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import { TabContainer, TabContainerItem } from 'mint-ui';
import VueWebsocket from "vue-websocket";
// Vue.use(VueWebsocket, "ws://otherserver:8080");
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
import 'mint-ui/lib/style.css'

import { Menu, MenuItem} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import VuePreview from 'vue-preview'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.use(VuePreview)

// with parameters install

Vue.use(Menu);
Vue.use(MenuItem);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
