<template>
  <div id="app">
    <h1>动态组件</h1>
    <sixOne></sixOne>
    <h1>插槽</h1>
    <UserSlot></UserSlot>
  </div>
</template>

<script>
import sixOne from './views/01-动态组件.vue'
// import UserSlot from './views/02-chacao.vue'
// import UserSlot from './views/05-插槽案例.vue'

export default {
  //  局部创建自定义命令
  directives: {
    // 自定义命名的指令为属性名
    myFocus: {
      inserted (el,binding) {
        // binding 自定义指令的基本对象 binding.value 则是等号后面传递的参数
        el.focus()
        console.log(binding);
      }
    }
  },
  name: 'App',
  components: {
    sixOne,
    // UserSlot
  },
  methods: {
    fn () {
      this.$refs.in.focus()
      // 聚焦后该input框的内容
    }
  }
}
</script>

<style>

</style>
