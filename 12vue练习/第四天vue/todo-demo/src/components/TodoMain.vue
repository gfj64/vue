<template>
  <ul class="todo-list">
    <!-- 遍历的任务列表 -->
    <!-- 动态的改变li的类名，当isDone为true时展示completed类名 -->
    <li :class="{completed: obj.isDone}" v-for="obj in arr" :key="obj.id">
      <div class="view">
        <input class="toggle" type="checkbox" v-model="obj.isDone"/>
        <label>{{ obj.name }}</label>
        <!-- 给删除按钮绑定删除事件 -->
        <!-- 删除 1. 将遍历的每一个元素的id传给delFn方法  -->
        <button class="destroy" @click="delFn(obj.id)"></button>
      </div>
    </li>
  </ul>

</template>

<script>
export default {
  props: {
    arr: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    delFn (id) {
      // 删除 2. 通过$emit传递给父组件
      this.$emit('delete', id)
    }
  },
}
</script>