<template>
  <section class="todoapp">
    <!-- 除了驼峰, 还可以使用-转换链接 -->
    <!-- 2. header设置一个自定义事件名 -->
    <TodoHeader @create="createFn" :list="list"></TodoHeader>
    <TodoMain :arr="showList" @delete="deleteFn"></TodoMain>
    <!-- 底部统计 1. 把list数组床给底部组件 -->
    <!-- 切换数据 5. z自定义切换状态事件 -->
    <!-- 清空已完成 3. 自定义清空方法 -->
    <TodoFooter :farr="showList" @changeState="changeStateFn" @clearDoneList="clearDoneListFn"></TodoFooter>
  </section>
</template>

<script>
// 1.0 样式引入
import "./styles/base.css"
import "./styles/index.css"

import TodoHeader from "./components/TodoHeader";
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";


export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  data() {
    return {
      list: JSON.parse(localStorage.getItem('list')) || [],
      getState: 'all' // 为了储存footer里的状态值
    }
  },


  computed: {
    showList() {
      // this.getState
      if (this.getState === 'yes') { // showList 展示的都是isDone： true的元素
        return this.list.filter(obj => obj.isDone)
      } else if (this.getState === 'no') { // showList 展示的都是isDone：false 的元素
        return this.list.filter(obj => !obj.isDone)
      } else { // 全部显示
        return this.list
      }
    }
  },

  watch: {
    // 由于需要在多个操作结束完成后，才去把新的list放到缓存中，如果设置在各个方法后，那么会出现很多多余代码，且不易维护。通过监听器的方式，当list列表发生变化时，去讲整个list更新到缓存中
    "list": {
      deep: true,
      handler(newVal) {
        // 将更新后的list存到缓存中
        // localStorage里面只能存储JSON字符串
        localStorage.setItem('list', JSON.stringify(newVal))
      }
    }
  },

  methods: {
    deleteFn(id) {
      console.log('删除', id)
      // 删除 3. 找到id对应的索引号
      let index = this.list.findIndex(obj => obj.id === id)
      // 删除 4. 可以通过splice进行删除
      this.list.splice(index, 1)
    },

    // 添加任务
    createFn(taskName) {
      console.log(taskName)
      // 3. 将传递过来的任务放到list数组中
      let params = {
        // 寻找数组最后一个元素的id + 1， 如果数组为空，那么以100为默认值
        id: this.list.length > 0 ? (this.list[this.list.length - 1].id + 1) : 100,
        name: taskName,
        isDone: false
      }

      this.list.push(params)
    },

    // 切换状态，并过滤数组 
    changeStateFn(state) {
      this.getState = state
    },

    // 清空已完成方法
    clearDoneListFn() {
      this.list = this.list.filter(obj => !obj.isDone) // 过滤出所有没有完成的任务

      // for (let i = this.list.length - 1; i >= 0; i--) {
      //   if (this.list[i].isDone) {
      //     this.list.splice(i, 1)
      //   }
      // }
    }
  },
};
</script>