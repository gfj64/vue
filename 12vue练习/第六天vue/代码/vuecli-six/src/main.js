import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 全局自定义指令 Vue.directive(自定义指令名称，{inserted () {} 当绑定元素插入到父元素时执行})
Vue.directive('gFocus', {
  inserted (el) { // 当绑定元素插入到父元素时执行
    // el 形参就是当前设置了 v-gFocus 的元素对象
    el.focus()
    console.log('执行了');
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
