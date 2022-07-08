<template>
  <div>
       <!-- 翻转数据更新 -->
       <!-- 数组翻转可以让v-for更新 -->
       <ul>
        <li v-for="(value,index) in arr" :key="index">{{value}}</li>
       </ul>

       <button @click="revBtn()">数组翻转</button>

       <!-- 截取数据更新 -->
       <!-- slice 不会改变原始数组 不会造成v-for更新 -->
       <ul>
        <li v-for="(value,index) in arr" :key="index">{{value}}</li>
       </ul>
       <button @click="sliceBtn()">截取数据</button>

       <!-- this.$set -->
       <!-- 更新某个值的时候 v-for监测不到 -->
       <ul>
        <li v-for="(value, index) in arr" :key="index">{{value}}</li>
       </ul>
       <button @click="thisSet()">改变一个值</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        arr:[1,2,3,4,5,6]
    };
  },
  methods: {
    revBtn () {
        this.arr.reverse()
    },
    // 截取数据
    // 只有改变原数组的时候，页面上的元素才会有相应的变化
    sliceBtn() {
        // slice方法不会改变原数组，而是返回一个新数组
        // this.arr.slice(0,3)
        // this.arr = this.arr.slice(0,3)

        // splice截取数据  ( 索引, 几个)
        this.arr.splice(2,1)

        // this.$set
        // 当你发现，改变某个数据时，页面不会发生更新，且无法快速找出问题，可以使用this.$set强制更新页面
    },

    thisSet () {
        // 3. 更新数组索引为0的元素-页面没有变化
        this.arr[0] = 100
        // console.log(this.arr);

        // 通过 - this.@set(更新目标机构-变量，更新的位置-索引/属性名，更新值)
        this.$set(this.arr,0,100)
    }
  },
};
</script>

<style lang="less" scoped>

</style>