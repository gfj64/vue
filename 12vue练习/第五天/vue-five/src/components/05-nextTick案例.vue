<template>
  <div>
    <!-- 1. 创建输入框和点击按钮 -->
       <input type="text" ref="myInput" v-model="str" placeholder="请输入" v-if="isShow" />
       <button @click="btn()" v-else>查询</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        str: '',
        isShow: false
    };
  },
  methods: {
    btn() {
        // 2. 当点击后 隐藏按钮并显示输入框
        this.isShow = true
        // 3.让输入框聚焦
        // 3.1 获取DOm元素
        console.log(this.$refs.myInput);
        // 3.2 该dom元素设置focus()
        // this.$refs.myInput.focus()
        // 通过$nextTick去让input框渲染后 在进行聚焦操作
        this.$nextTick(() => {
            this.$refs.myInput.focus()
        })
    }
  },
};
</script>

<style scoped>

</style>