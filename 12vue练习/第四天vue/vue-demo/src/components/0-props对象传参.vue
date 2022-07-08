<template>
  <div class="my-product">
    <!-- 2. 使用props中的变量 -->
    <h3>标题: {{ obj.title }} </h3>
    <p>价格: {{ obj.price }} 元</p>
    <p>描述: {{ obj.desc }}</p>
    <!-- <button @click="() => { obj.price-- }">宝刀-砍1元</button> -->
  </div>
</template>

<script>
export default {
  // 1. 定义props中的变量名 - 后续需要父组件传值过来
  props: ['obj'],

  data() {
    return {
      
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