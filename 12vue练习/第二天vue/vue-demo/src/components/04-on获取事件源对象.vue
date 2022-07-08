<template>
  <div>
       <!-- 1.方法后面不跟括号时 这个方法执行时的第一个参数 就是事件源-->
       <a @click="fn" href="http://www.baidu.com">1</a>
       <!-- 2. 如果方法后面写了括号 那么使用$event来代表事件源参数 -->
       <a @click="fn2($event)" href="http://www.baidu.com">2</a>
       <!-- 3. 如果不止一个参数，建议 将事件源放到所有实参的最后面 -->
       <a @click="fn3(num,$event)" href="http://www.baidu.com">3</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
        num:0,

    };
  },
  methods: {
    // 1. 事件触发.没有传值 可以直接event获取事件对象
    fn (event) {
        console.log(event);
        // 阻止默认行为 preventDefault();
        event.preventDefault();
    },
    // 
    fn2 (event) {
        console.log(event);
        event.preventDefault();
    },
    // 2. 事件触发 如果传值了 需要手动传入$event接收事件对象
    fn3 (count,event) {
        console.log(count,event);
        event.preventDefault();
    }
  },
};
</script>

<style scoped>

</style>