import Vue from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.css"

Vue.config.productionTip = false

// 过滤方法1 Vue.filter('过滤方法名'，(值)=> {return 页面上的展示值})
// 任意的.vue文件 直接 使用   全局的过滤器
// 让它大写
Vue.filter('toUp',(value) => {
  return value.toUpperCase()
})

new Vue({
  render: h => h(App),
}).$mount('#app')
