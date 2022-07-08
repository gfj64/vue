<template>
  <div>
    <div>b</div>
    <div>{{ title }}</div>
  </div>
</template>

<script>
//1. 引入空白的VUe对象
import bus from './bus.js'
export default {
  data() {
    return {
      title: ''
    }
  },
  //3. 组件在创建完成后，立即执行的函数
  created() {
    //2. 通过内置的$on事件去监听bus的数据  接收
    bus.$on('sendB', (value) => {
      console.log(value)
      this.title = value
    })
  },
  methods: {

  },
}
</script>

<style>

</style>