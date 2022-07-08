<template>
  <div>
       <p>3. vue更新DOM是异步的</p>
       <p ref="'myP'">{{count}}</p>
       <button>点击加一 马上提取赔不起内容</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        count: 0
    };
  },
  methods: {
    btn() {
        //  vue 监测数据更新，开启一个DOM更新队列（异步任务）
        this.count++
        // console.log(this.$refs.myP.innerHTML);  // 0
        // 可以通过$nextTick() 去让这个方法中的代码在页面dom更新完成后再执行
        this.$nextTick(() => {
            console.log(this.$refs.myP.innerHTML);
        })
    }
  },
};
</script>

<style lang="less" scoped>

</style>