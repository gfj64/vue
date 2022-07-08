<template>
  <div>
       <!--
        * v-show="vue变量"
        * v-if="vue变量"
         -->
         <h1 v-show="flag2">v-show</h1>
         <h1 v-if="flag">v-if</h1>

         <!-- 
            v-show 采用的是display：none的方式，来隐藏 => 频繁切换时使用
            v-if 采用的是删除DOM树（节点）直接移除(删除) => 表达弹框渲染时

            以后常常会出现通过接口数据来渲染弹框表单的情况
          -->

          <h2 v-if="num===0">v-else-if</h2>
    <!-- v-else-if -->
          <h2 v-else-if="num === 1">v-els-if</h2>

          <!-- v-else 是与v-if结合使用的 一般情况下 写到v-if的兄弟标签后 -->
          <h2 v-else>if兄弟</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
        flag:true, // true 显示 false 不显示
        flag2:true,
        num:2
    };
  },
  methods: {

  },
};
</script>

<style lang="less" scoped>

</style>