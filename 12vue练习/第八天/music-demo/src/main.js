import Vue from 'vue'
import App from './App.vue'
import "./mobile/flexible.js" // 适配
import "./styles/reset.css" // 初始化样式
import router from './router/index.js'
import { Tabbar, TabbarItem, NavBar, Col, Row, Image as VanImage, Cell, Icon, Search, List } from 'vant'

// import { recommendMusicAPI } from './api/index.js'
// async function myFn(){
//   const res = await recommendMusicAPI({limit: 6});
//   console.log(res);
// }
// myFn();

Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NavBar)
Vue.use(Col)
Vue.use(Row)
Vue.use(VanImage)
Vue.use(Cell)
Vue.use(Icon)
Vue.use(Search)
Vue.use(List)

Vue.config.productionTip = false

// 目标: Vant组件库自动适配
// 自动让所有px转成rem (以后我们可以直接写px) - webpack配合postcss和postcss-pxtorem插件就可以翻译css代码, 把px转rem使用
// 1. 下载 postcss  postcss-pxtorem@5.1.1 (要和当前脚手架webpack兼容)
// 2. postcss.config.js - 填入插件转换的基准值 (配置可以复制md)
// 3. 一定要重启服务器, 观察效果

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
