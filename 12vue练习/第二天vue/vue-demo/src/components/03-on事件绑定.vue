<template>
  <div>
       <div>你要购买的商品数量：{{num}}</div>
       <!-- 1.绑定事件的语法 -->
       <!-- v-on：事件名="少量代码" -->
       <button v-on:click="num = num + 1">加一</button>
       <!-- v-on：事件名="方法名" -->
       <button v-on:click="addFn()">加二</button>
       <!-- v-on:事件名='方法名(实际参数)' -->
       <button v-on:click="addFn2(3)">加三</button>
       <!-- 通过 @ 来简写 v-on -->
       <!-- 以后通过 @事件名="方法名（）" -->
       <button @click="addFn2(3)">加三@</button>
  </div>
</template>

<script>
export default {
  // data里 变量
  data() {
    return {
        num:0,
    };
  },
  //methods里 定义函数方法
  methods: {
    addFn () {
        // 通过this去获取data中的变量 this指向的是export default的{变量}
        // data函数会把对象挂到当前组件对象上 让this去指向
        this.num++
        this.num++
    },
    addFn2 (count) {
        this.num = this.num + count
    }
  },
};
</script>

<style scoped>

</style>