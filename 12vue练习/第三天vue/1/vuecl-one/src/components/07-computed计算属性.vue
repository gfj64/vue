<template>
  <div>
       <div>{{ num1 + num2 }}</div>
       <div>{{  sum }}</div>
       <div>{{  sum }}</div>
       <div>{{  sum }}</div>
       <div>{{  getSum() }}</div>
       <div>{{  getSum() }}</div>
       <div>{{  getSum() }}</div>
       <button @click="changeNum()">num2+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        num1: 1,
        num2: 2
    };
  },
// 计算属性
/**
 *  computed: {
 *    计算属性名 () {
 *          return 需要计算的值/表达式
 *      }  
 *  }
 */
    computed: {
       sum () {
        console.log('计算属性')
        return this.num1 + this.num2
       } 
    },

  methods: {
    getSum () {
        console.log('函数');
        return this.num1 + this.num2
    },
    changeNum () {
        this.num2++
    }
  },
};
</script>

<style scoped>

</style>