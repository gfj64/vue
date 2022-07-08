<template>
  <div id="app">
    <div class="container">
      <!-- 顶部框模块 -->
      <div class="form-group">
        <div class="input-group">
          <h4>品牌管理</h4>
        </div>
      </div>

      <!-- 数据表格 -->
      <table class="table table-bordered table-hover mt-2">
        <thead>
          <tr>
            <th>编号</th>
            <th>资产名称</th>
            <th>价格</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(obj, index) in list" :key="index">
            <td>{{obj.id}}</td>
            <td>{{obj.name}}</td>
            <!-- 如果价格超过100，就有red这个类 -->
            <td :class="{red: obj.price > 100}">{{obj.price}}</td>
            <td>{{ obj.time | formatDate }}</td>
            <td><a href="#" @click="delFn">删除</a></td>
          </tr>
        </tbody>
          
        <tfoot v-show="list.length === 0">
          <tr>
            <td colspan="5" style="text-align: center">暂无数据</td>
          </tr>
        </tfoot>
           
      </table>

      <!-- 添加资产 -->
      <form class="form-inline">
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="资产名称"
              v-model="name"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="价格"
              v-model.number="price"
            />
            <!-- number 数值类型 -->
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <!-- 阻止表单提交 -->
        <button class="btn btn-primary" @click.prevent="addFn">添加资产</button>
        <!-- prevent 阻止默认提交 -->
      </form>
    </div>
  </div>
</template>

<script>
// 引入时间模块
import moment from "moment";
// 1. 明确需求
// 2. 标签+样式+默认数据
// 3. 下载bootstrap, main.js引入bootstrap.css
// 4. 把list数组 - 铺设表格
// 5. 修改价格颜色 动态class
export default {
  name: 'pingPai',
  data() {
    return {
      form: {
          name: '', // 名称
          price: 0 // 价格
      },
      list: [
        { id: 100, name: "外套", price: 199, time: new Date('2010-08-12')},
        { id: 101, name: "裤子", price: 34, time: new Date('2013-09-01') },
        { id: 102, name: "鞋", price: 25.4, time: new Date('2018-11-22') },
        { id: 103, name: "头发", price: 19900, time: new Date('2020-12-12') }
      ]
    }
  },
  methods: {
    addFn () {
      // 判断输入框是否为空
      if(this.name.trim().length === 0 || this.price === 0){
        // 为空就弹出提示框
        alert('内容不能为空')
        // 且返回 不执行下面代码
        return
      }
      // 无数组新增list没有数据 id需要给一个固定值
      let id = this.list.length > 0 ? this.list.length > 0 ? this.list[this.list.length - 1].id + 1 : 100 : 100
      // 把值一对象的形式插入list
      this.list.push({
        // id当前数组最后一个对象的下标 - 1 就是最后一个对的的id 在加一就得到添加的对象的id
        id: id,
        name: this.name,
        price: this.price,
        // 获取当前本机时间
        time: new Date()
      })
    },
    delFn(id) {
      // 通过id找到这条数据的下标 findIndex方法
      // 判断id是否是要找的id 
      let index = this.list.findIndex(obj => obj.id === id)
      this.list.splice(index, 1)
    }
  },
  //   处理时间
   filters: {
    formatDate(value) {
      //  这里是用import中的
      return moment(value).format("YYYY-MM-DD");
      // 用的data里的
      //  return this.moment(value).format(YYYY-MM-DD)
    },
  },
}
</script>

<style >
.red{
  color: red;
}
</style>