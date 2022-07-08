<template>
  <header class="header">
    <h1>todos</h1>
    <!-- 全选框 -->
    <!-- 当列表长度为0时，禁用全选按钮 -->
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll" :disabled="list.length === 0">
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keydown.enter="downFn()"
      v-model="task"
    />
  </header>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      task: ''
    }
  },

  computed: {
    isAll: {
      // 2，点击全选框，让所有的小选框选中
      set (val) {
        // console.log(val)
        this.list.forEach(obj => {
          obj.isDone = val
        })
      },
      // 1. 选择小选框，判断是否让全选框自动选中
      get () {
        // every判断所有元素均满足条件
        // 当数组长度为0时，直接返回false
        if (this.list.length === 0) {
          return false
        }
        let flag = this.list.every(value => {
          return value.isDone
        })
        return flag
      }
    }
  },

  methods: {
    downFn() {
      // 5. 优化：判断内容是否为空
      if (this.task.trim().length === 0) {
        alert('内容不能为空')
        return
      }

      // 1. 将输入框中的值发送给父组件
      this.$emit('create', this.task)
      // 4. 优化：提交添加到列表后，情况输入框的内容
      this.task = ''
    }
  },
}
</script>