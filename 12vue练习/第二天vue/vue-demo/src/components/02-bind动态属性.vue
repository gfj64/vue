<template>
  <div>
    <a v-bind:href="url">百度</a>
    <!-- <img src="../assets/preview.gif" alt=""> -->
<!-- 如果所属性为图像，文件等路径时，作为动态属性值 那么需要先通过import 或者 require引入资源后才使用 -->
<!-- 2. 赋值 -->
<img v-bind:src="src" alt="">
<img v-bind:src="guguUrl" alt="">
<img v-bind:src="guguUrl2" alt="">
<!-- 简写方式 推荐用-->
<img :src="guguUrl2" alt="">

  </div>
</template>

<script>
// 1.该组件创建的时候就会引入资源
import guguUrl from '../assets/preview.gif'
// 1.准备变量
export default {
    name : 'bind-demo',
    data() {
        return {
            url: 'http://www.baidu.com',
            // 一开始就加载 图片一多就响应慢不推荐
            src: '../assets/preview.gif',
            guguUrl,
            // guguUrl: guguUrl,
            // 2. require 只有使用这个变量时候 才会在页面上加载资源  推荐用
            guguUrl2: require('../assets/preview.gif')
        }
    }
}
</script>

<style scoped>

</style>