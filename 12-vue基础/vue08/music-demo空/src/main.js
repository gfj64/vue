import Vue from 'vue'
import App from './App.vue'
import "./mobile/flexible.js" // 适配
import "./styles/reset.css" // 初始化样式
import router from './router/index.js' // 路由对象

// 底部按钮
import { Tabbar, TabbarItem } from 'vant';

// 测试封装的api方法
import {recommendMusicAPI} from './api/index.js'
async function fn(){
  // api方法原axios请求的Promise对象（里面有一个ajax请求）
  const res = await recommendMusicAPI()
  console.log(res);
}
fn()

Vue.use(Tabbar);
Vue.use(TabbarItem);


// 头目
import { NavBar } from 'vant';

Vue.use(NavBar);
// 首页
import { Col, Row } from 'vant';

Vue.use(Col);
Vue.use(Row);
// 图片
import { Image as VanImage } from 'vant';

Vue.use(VanImage);

// 最新音乐
import { Cell, CellGroup } from 'vant';

Vue.use(Cell);
Vue.use(CellGroup);

import {Icon} from 'vant';
Vue.use(Icon);

//  搜索框
import {Search} from 'vant';
Vue.use(Search)

Vue.config.productionTip = false

new Vue({
  
  render: h => h(App),
  router, 
}).$mount('#app')
