<template>
  <div>
    <!-- 二 使用组件 -->
    <!-- 分为 全局注册(main.js 里面注册)  和局部注册 -->
    <h3>案例：折叠面板</h3>
    <!-- 4.局部注册 挂载 使用模块 页面显示的 -->
    <!-- 全局注册 4. 组件名当做标签使用 -->
    <pannel-er></pannel-er>
    <pannel></pannel>

  </div>
</template>

<script>
//  目标：组件的局部注册 - 用的最多
// 1.局部注册 创建组件
// 2.局部注册 引入组件
import pannel from './01-封装组件 copy.vue'

export default {
  // 3.局部注册 注册组件
  components: {
    pannel,

  },
}
</script>

<style lang="less">
body {
  background-color: #ccc;
  #app {
    width: 400px;
    margin: 20px auto;
    background-color: #fff;
    border: 4px solid blueviolet;
    border-radius: 1em;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    padding: 1em 2em 2em;
    h3 {
      text-align: center;
    }
    
  }
}
</style>