<template>
  <div class="my-header" :style="{ color:titleColor, backgroundColor:titleBackgroundColor }">{{title}}</div>
</template>

<script>
/** 目标：
 * 1. 可以自定义标题内容
 * 2.可以自定义标题颜色
 * 3.可以自定义标题背景颜色
 */
export default {
  props: {
    title:{
      type: String,
      required: true
    },
    titleColor: {
      type: String,//颜色是16进制颜色
      default: '#ffffff'
    },
    titleBackgroundColor: {
      type: String,//颜色是16进制颜色
      default: 'pink'
    }
  }
}
</script>

<style lang="less" scoped>
  .my-header {
    height: 45px;
    line-height: 45px;
    text-align: center;
    background-color: #1d7bff;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
  }
</style>