<template>
  <div>
    <MyTable :list="dataList">
      <template #header="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <!-- @blur="scope.row.inputVisible = false" 通过input的失焦事件让inputVisible属性变为false -->
          <input type="text"
            class="tag-input form-control"
            style="width: 100px;"
            :ref="scope.row.id"
            v-if="scope.row.inputVisible"
            v-model="scope.row.inputValue"
            @blur="scope.row.inputVisible = false"
            @keydown.enter="enterFn(scope.row)"
            @keydown.esc="scope.row.inputValue = ''"
          />
          <button 
            v-else 
            style="display: block;" 
            class="btn btn-primary btn-sm add-tag"
            @click="checkFn(scope.row)"
          >+Tag</button>

          <span
            class="badge badge-warning"
            v-for="(v, i) in scope.row.tags"
            :key="i"
          >
            {{v}}
          </span>
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="delFn(scope.row.id)">删除</button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from '../components/MyTable.vue'
export default {
  components: {
    MyTable
  },

  data() {
    return {
      dataList: []
    }
  },

  created() {
    this.getList()
  },

  methods: {
    getList() {
      this.$axios({
        method: 'GET',
        url: '/api/goods'
      }).then(res => {
        console.log(res.data)
        // 即使写出来的点语法找数据再奇怪，但也要遵循后端的代码结构
        this.dataList = res.data.data
      }).catch(err => {
        console.log(err)
      })
    },

    // 删除当前列的商品
    delFn (id) {
      // 1. 通过findIndex获取当前目标id所在元素的索引
      // let index = this.dataList.findIndex(obj => obj.id === id)
      // this.dataList.splice(index, 1)

      // 2. 通过过滤数组来实现删除对应元素
      this.dataList = this.dataList.filter(obj => obj.id !== id)
    },

    // 输入框敲回车后，让内容添加到tags列表中
    enterFn (obj) {
      // 安全判断 判断输入框中是否有值
      if (obj.inputValue.trim().length === 0) {
        alert('请输入内容')
        return
      }

      // 将内容push到数组中
      obj.tags.push(obj.inputValue)
      // 清空输入框的内容
      obj.inputValue = ''
    },

    // 通过js代码实现自定聚焦功能
    checkFn (obj) {
      // 切换状态值，让输入框展现
      obj.inputVisible = true

      // 通过设置ref来查找当前的input输入框
      this.$nextTick(() => {
        this.$refs[obj.id].focus()
      })
    }
  },
}
</script>

<style scoped>
.badge {
  color: black;
  background-color: yellowgreen;
  margin-right: 5px;
}
</style>