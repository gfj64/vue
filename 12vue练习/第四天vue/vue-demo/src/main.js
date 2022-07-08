import Vue from 'vue' // 引入vue
import App from './App.vue' // 引入App.vue文件模块， 这个文件是作为所有vue组件的入口

Vue.config.productionTip = false // 一个控制台打印的提示

//  目标：组件基本使用 - 全局注册
//全局注册 1. 创建组件 - 文件名.vue
//全局注册 2. 引入组件 - import 引入的文件名 from './文件名.vue'
import pannel from './components/01-封装组件.vue'
//全局注册 3. 注册组件 - Vue.component('组件名', 引入的文件名)
Vue.component("pannel-er", pannel)
//全局注册 4. 在 需要的文件 里面使用




new Vue({ // 实例化vue对象
  render: h => h(App), // 告诉vue去渲染 App.vue 页面
}).$mount('#app') // $mount是让这个渲染页面放置在public/index.html中带有id为app的div中
