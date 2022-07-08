import Vue from 'vue'
import App from './App.vue'
import "./assets/fonts/iconfont.css" // 引入字体图标css文件
import "bootstrap/dist/css/bootstrap.css"
import axios from "axios";
// console.dir(Vue);

Vue.config.productionTip = false

// 全局配置axios
axios.defaults.baseURL = " https://www.escook.cn";
Vue.prototype.$axios = axios

// 全局指令
Vue.directive('gFocus', {
  inserted (el) {
    el.focus()
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
