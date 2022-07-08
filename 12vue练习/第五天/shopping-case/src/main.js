import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css" // 引入第三方包里的某个css文件

// 全局配置aioxs
import axios from 'axios'
// 配置全局url地址
axios.defaults.baseURL = "https://www.escook.cn"
// axios方法添加到Vue的原型上- 可以在每个组件中通过this.$axioss来进行使用
Vue.prototype.$axios = axios

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
