<template>
  <div>
       <div @click="fatherFn()">
       <!-- 最常用的修饰符 stop prevent -->
            <div @click.stop="oneFn()">stop-阻止冒泡事件</div>
            <!-- prevent 阻止默认行为  stop 阻止冒泡 -->
            <a href="http://www.baidu.com" @click.prevent.stop>阻止默认事件 + 冒泡事件 + 如果只阻止默认事件 没有其他的业务执行时，可以不写方法</a>
            <!-- once修饰符 只执行一次 -->
            <div @click.once="twoFn()">观察点击事件执行几次</div>
       </div>
  </div>
</template>

<script>
export default {
    // 数据写在data的return对象中
  data() {
    return {
        num:0,
    };
  },
  methods: {
    fatherFn(){
        console.log('执行父元素方法');
    },
    oneFn () {
        console.log('阻止冒泡事件发生');
    },
    twoFn () {
        console.log('once修饰符');
    }
  },
};
</script>

<style scoped>

</style>