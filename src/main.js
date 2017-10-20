// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.prototype.$ajax = axios;

// 引入default样式
import('./css/lib/reset.css')

//引入公共css
import('./css/global.css')

// 引入所有的js框架


// 引入vue自定义public组件
import selectArea from './components/public/selectArea/select-area.js'
Vue.use(selectArea)

// 引入vue自定义private组件


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})




