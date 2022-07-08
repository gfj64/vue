//  引入 vue
import Vue from 'vue' 
// 引入app.vue文件模块 这个文件是作为
import App from './App.vue'

// 1. 下一行不进行监测
// eslint-disable-next-line
let a = ()=> console.log('a');
// 2. 同一行不进行监测
let v = 123 // eslint-disable-line
// 多行不进行监测
/* eslint-disable */
let b = ()=> console.log('a');
let c = ()=> console.log('a');
/* eslint-disable */

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
