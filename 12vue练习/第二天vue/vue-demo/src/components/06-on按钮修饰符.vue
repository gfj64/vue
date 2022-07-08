<template>
  <div>
       <!-- 1.绑定键盘按下事件  回车键 -->
       <!-- 使用场景：账号密码的回车登录 或者是表单回车提交 -->
       <input type="text" @keydown.enter="enterFn()" />
       <!-- 2. .esc 修饰符 - 取消键 -->
       <!-- 使用场景 ： 清空输入框中的类容 v-model="str"-->
       <!-- v-model 是绑定输入框与data数据的桥梁 -->
       <input type="text" @keydown.esc="escFn()" v-model="str" />
  </div>
</template>

<script>
export default {
  data() {
    return {
        num:0,
        str:''
    };
  },
  methods: {
    enterFn() {
        console.log('按下了回车键');
    },
     escFn() {
        this.str = ''
        console.log('清空撤回用户操作');
     }
  },
};
</script>

<style scoped>

</style>