<template>
  <div>
    <ul>
      <li v-for="(Array,index) in Arr" :key="index">{{ Array }}</li>
    </ul>
    <button v-on:click="btn">走你</button>
  </div>
</template>

<script>
export default {
  name: 'bay-belle',
  data() {
    return {
     Arr: ["帅哥", "美女", "程序猿"],
    }
  },
  methods: {
    btn() {
      // push() 在末尾添加Arr的第一个元素
      this.Arr.push(this.Arr[0])
      this.Arr.shift(this.Arr)

    }
  },
};
</script>

<style lang="less" scoped>

</style>