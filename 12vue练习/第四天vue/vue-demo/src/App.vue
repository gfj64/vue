<template>
  <div id="app">
    <!-- 3. 挂载组件 -->
    <!-- <Demo :str="str"></Demo> -->
    <Demo></Demo>
  </div>
</template>

<script>
// 1. 引入组件
// import Demo from './components/01-示例.vue'
// import Demo from './components/02-props组件传值.vue'
import Demo from './components/03-组件间的传值/01-eventBus.vue'
export default {
  name: 'App',
  // 2. 注册组件
  components: {
    Demo
  },
  data() {
    return {
      // str: '这是一个字符串',
      // num: 123,
      // arr: [1, 2, 3, 4, 5],
      // obj: {
      //   name: 1,
      //   age: 1
      // }
    }
  },

}
</script>

<style scoped>
</style>
