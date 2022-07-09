<template>
  <div>
    <span>姓名：</span>
    <input type="text" v-model="full">
  </div>
</template>

<script>
export default {
  name: 'w-z',
  data () {
    return {

    }
  },
  // 计算属性
  computed: {
    full: {
      // 通过给full赋值触发set方法
      set(value) {
        console.log(value);
      },
      // 使用full的值触发get方法
      get() {
        return "后面有"
      }
    }
  }
}  
</script>

<style lang="less" scoped>

</style>
