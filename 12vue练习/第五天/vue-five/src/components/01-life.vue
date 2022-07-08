<template>
  <div>
       <div>create生命周期</div>
       <div id="myDiv">{{msg}}</div>
       <ul>
        <button @click="arr.push(11)">点击后末尾添加</button>
       </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '生命周期的诞生' ,
      arr: [1,2,3,4],
      timer: null // 创建一个变量接收定时器
    };
  },

  // 1.初始化
  // 1.1 beforeCreate
  beforeCreate() {
    console.log('beforeCreate------执行');
    console.log(this.msg);
  },
  // 1.2 created data methods 等创建完成后
  // 常用钩子函数 -1
  created() {
    console.log('created --- 执行');
    console.log(this.msg);
  },
  // 2.挂载
  // 2.1 beforeMount
  beforeMount() {
    console.log('beforeMount--- 执行');
    console.log(document.querySelector('#myDiv'));
  },
  // 2.2 mounted - 真实dom挂载完成后执行的钩子函数
  // 常用构造函数 - 2
  mounted() {
    console.log('mounted --- 执行');
    console.log(document.querySelector('#myDiv'));
  },

  // 3.更新
  // 工作中尽量不要使用 - 用watch监听代替
  // 3.1 beforeUpdate
  beforeUpdate() {
    console.log('beforeUpdate---执行');
    // 找到第5个li标签
    console.log(document.querySelectorAll('#myUl>li')[4])
  },
  // 3.2 updated
  updated () {
    console.log('updated --- 执行');
    // 找到第5个li标签
    console.log(document.querySelectorAll('#myUl>li')[4])
  },
  // 4. 销毁
  // 4.1 beforeDestroy() 销毁前 - 销毁定时器
  // 常用钩子函数 - 3
  beforeDestroy() {
    console.log('beforeDestroy --- 执行');
    // 清除定时器
    clearInterval(this.timer)
  },
  destroyed () {
    console.log('destroyed -- 执行');
    console.log(this.timer, 'timer');
  },



};
</script>

<style lang="less" scoped>

</style>