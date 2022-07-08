<template>

<!-- 当一个组件向另一个组件传值 -->
  <div class="my-product">
    <!-- 2. 使用props中的变量 -->
    <h3>标题: {{ title }} </h3>
    <p>价格: {{ price }} 元</p>
    <p>描述: {{ desc }}</p>
    <button @click="fn(id)">宝刀-砍1元</button>
  </div>
</template>

<script>
export default {
  // 1. 定义props中的变量名 - 后续需要父组件传值过来
  props: ['title', 'price', 'desc', 'id'],

  data() {
    return {
      
    }
  },

  methods: {
    fn (id) {
      // 2.子组件内 恰当时机this.$emit("自定义事件名称", 参数)
      // this.$emit("自定义事件名", 传值) - 执行父methods里函数代码
      // 需求： 通过点击砍一刀，让当前元素中的价格-1
      this.$emit('changPrice', id)
    }
  },
}
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>