<template>
  <div id="app">
    <lj></lj>
  </div>
</template>

<script>
// 1.引入组件
import lj from './components/0-空白.vue'
// import lj from './components/01-插值表达式.vue'
// import lj from './components/02-bind动态属性.vue'
// import lj from './components/03-on事件绑定.vue'
// import lj from './components/04-on获取事件源对象.vue'
// import lj from './components/05-on修饰符.vue'
// import lj from './components/06-on按钮修饰符.vue'
// import lj from './components/07-on 案例翻转字符串.vue'
// import lj from './components/08-v-mode双向绑定数据.vue'
// import lj from './components/09-v-model修饰符.vue'
// import lj from './components/10-v-text和v-html语法.vue'
// import lj from './components/11-show和if.vue'


// import lj from './components/12-折叠案例.vue'

export default {
  name: 'App',
  // 2. 注册组件
  components: {
    // cj,
    lj

  }
}
</script>

<style scoped>

</style>
