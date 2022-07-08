<template>
  <div>
    子组件
    {{str}}
    <hr>
    {{num}}
    <hr>
    {{arr}}
    <hr>
    {{obj}}
  </div>
</template>

<script>
export default {
  name: 'App',

  // props: ['str', 'num', 'arr', 'obj'],
  props: {
    str: {
      type: String, // 要求该变量的传参类型
      // required: true, // 是否必传（默认为false）
      default: '默认值' // 默认值
    },

    num: {
      type: Number,
      default: 0
    },

    arr: {
      type: Array,
      default: () => [] // () => { return [] }
    },

    obj: {
      type: Object,
      default: () => ({}) // 如果箭头函数返回的是一个对象，可以用小括号包裹这个对象，以免让js代码认为大括号为方法的边界
    }
  },

  data() {
    return {
    }
  },
  methods: {

  },
}
</script>

<style scoped>
</style>
