<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>{{ count }}</strong></span>
    <ul class="filters">
      <li>
        <!-- 切换数据 2. 将a标签的选中状态class设置为动态class -->
        <!-- 切换数据 3. 给a标签设置点击事件让isSel状态改变 -->
        <a :class="{selected: isSel === 'all'}" href="javascript:;" @click="sendState('all')">全部</a>
      </li>
      <li>
        <a :class="{selected: isSel === 'no'}" href="javascript:;" @click="sendState('no')">未完成</a>
      </li>
      <li>
        <a :class="{selected: isSel === 'yes'}" href="javascript:;"  @click="sendState('yes')">已完成</a>
      </li>
    </ul>
    <!-- 清空已完成 1. 绑定点击事件 -->
    <button class="clear-completed" @click="clearFn()">清除已完成</button>
  </footer>
</template>

<script>
// 存在多个状态时，状态值 0: 全部 1：未完成 2： 已完成
// all: 全部 no：未完成 yes：已完成
export default {
  // 底部统计 2. 获取父组件传递过来的值
  props: {
    farr: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      // 切换数据 1. 切换列表状态码  all: 全部 no：未完成 yes：已完成
      isSel: 'all'
    }
  },

  // 底部统计 3. 通过计算属性监听剩余数量的变化
  computed: {
    count () {
      return this.farr.length
    }
  },

  methods: {
    sendState (state) {
      // 切换数据 3.  切换状态
      this.isSel = state
      // 切换数据 4.  将状态传给父组件
      this.$emit('changeState', this.isSel)
    },

    // 清空已完成 2. 告诉父组件去清空已完成的数据
    clearFn () {
      this.$emit('clearDoneList')
    }
  },
}
</script>