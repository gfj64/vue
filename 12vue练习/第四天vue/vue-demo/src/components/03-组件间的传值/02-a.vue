<template>
  <div>
    <div>a</div>
    <button @click="giveB()">点击一键坐车</button>
  </div>
</template>

<script>
// 1.引入空白的VUe对象
import bus from './bus.js'
export default {
  data() {
    return {
      title: 'a的标题'
    }
  },
  methods: {
    giveB () {
      //2. 通过bus的$emit自定义方法名 传送
      bus.$emit('sendB', this.title)
    }
  },
}
</script>

<style>

</style>