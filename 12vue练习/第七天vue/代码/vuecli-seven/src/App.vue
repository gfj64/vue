<template>
  <div id="app">
    <!-- 路由使用 -->
    <exx></exx>
<!-- 声明式路由 -->
    <exxs></exxs>
    <!-- 跳转传参 -->
    <aee></aee>
    <!-- 编程式导航 -->
    <der></der>
    <!-- 路由嵌套 -->
    <one></one>
  </div>
</template>

<script>
import exx from '../src/00-路由基本使用.vue'
import exxs from '../src/01-声明式导航.vue'
import aee from '../src/02-跳转传参.vue'
import der from '../src/03-编程式导航.vue'
import one from '../src/4-f路由嵌套.vue '

export default {
  name: 'App',
  components: {
  one,
  exx,
  aee,
  der,
  exxs,
  },
  
}
</script>

<style>

</style>