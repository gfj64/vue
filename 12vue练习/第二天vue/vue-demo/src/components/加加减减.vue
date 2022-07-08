<template>
  <div>
    <ul>
      <li v-for="(Array, index) in arr" :key="index">{{ Array }}
        <button v-on:click="omit(index)">删除</button>
      </li>
      <button @click="add">添加</button>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'add-minus',
  data() {
    return {
      arr: [1,2,3]
    }
  },
  methods: {
   omit(index) {
    this.arr.splice(index,1)
   },
   add() {
    // 再数组后面随机生成数字 M
      //Math.random(); 返回0和1间(包括0,不包括1)的一个随机数。
     // Math.floor(n); 返回小于等于n的**大整数。
      // Math.floor(Math.random()*20);时，可均衡获取0到19的随机整数
      // Math.round();  //四舍五入地取整
    this.arr.push(Math.round(Math.random() * 20))
    // parseFloat(tem).toFixed(0)
    
   }
  },
};
</script>

<style lang="less" scoped>

</style>