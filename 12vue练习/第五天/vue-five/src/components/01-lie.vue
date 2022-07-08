<template>
  <div id="App">
       <h1>声明周期函数</h1>
       <!-- 标签中使用组件时，可以所有单词小写且用短横线连接 -->
       <life v-if="isShow"></life>
       <button @click="isShow = false">销毁life组件</button>
  </div>
</template>

<script>
import life from  './components/01-life.vue'

export default {
  name: 'App',
  components: {
   life
  },
  data () {
    return {
        isShow:true
    }
  }
}
</script>

<style >

</style>