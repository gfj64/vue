import Vue from 'vue'
import App from './App.vue'
// 引入方式1： 全部引入
// 优点： 不用在意引入那些组件 用就行了
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// 引入方式2：自动按需引入
//  优势： 需要什么组件就引什么组件，这样能减少项目压力
import { Button, Form, Field } from 'vant';
Vue.use(Button)
Vue.use(Form)
Vue.use(Field)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
