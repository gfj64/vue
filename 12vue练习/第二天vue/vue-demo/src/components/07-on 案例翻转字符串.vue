<template>
  <div>
    <!-- 1. 变量准备 静态页面铺设 -->
       <h1>{{msg}}</h1>
       <!-- 2. 绑定点击事件 -->
       <button @click="btn()">翻转</button>
  </div>
</template>

<script>
export default {
  // 变量
  data() {
    return {
        msg:'hello,world'
    };
  },
  // 方法 函数
  methods: {
    btn() {
        //3.将字符串变成数组 split('')
        let arr = this.msg.split('')
        // 4. 将数组翻转  reverse()
        arr.reverse()
        // 5.将数组拼接成字符串 join('')
        this.msg = arr.join('')

        // // 链式写法  简写
        // this.msg = this.msg.split('').reverse('').join('')
    }
  },
};
</script>

<style lang="less" scoped>

</style>