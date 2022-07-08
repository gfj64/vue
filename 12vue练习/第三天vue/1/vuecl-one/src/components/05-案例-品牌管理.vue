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
          <tr v-for="obj in list" :key="obj.id">
            <!-- // 编号 -->
            <td>{{ obj.id }}</td>
            <!-- // 资产 -->
            <td>{{ obj.name }}</td>

            <!-- 如果价格超过100，就有red这个类 -->
            <!-- // 价格 -->
            <td :class="{ red: obj.price > 100 }">{{ obj.price }}</td>
            <!-- // 时间 -->
            <td>{{ obj.time | formatDate }}</td>
            <td><a href="#" @click.prevent="delFn(obj.id)">删除</a></td>
          </tr>
          <!-- 统计 -->
          <tr style="background-color: #eee">
            <td>统计:</td>
            <td colspan="2">总价钱为: {{ allPrice }}</td>
            <td colspan="2">平均价: {{ svgPrice }}</td>
          </tr>

        </tbody>

        <!-- 当list长度wei0 展示tfoot -->
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
              v-model="form.name"
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
              v-model.number="form.price"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <!-- 阻止表单提交 -->
        <button class="btn btn-primary" @click.prevent="addFn()">
          添加资产
        </button>
      </form>
    </div>
  </div>
</template>

<script>
// 1. 明确需求
// 2. 标签+样式+默认数据
// 3. 下载bootstrap, main.js引入bootstrap.css
// 4. 把list数组 - 铺设表格
// 5. 修改价格颜色

// 1.下载moment时间模块
import moment from "moment";

export default {
  data() {
    return {
      form: {
        name: "", // 名称
        price: 0, // 价格
      },
      // list: [
      //   { id: 100, name: "外套", price: 199, time: new Date("2010-08-12") },
      //   { id: 101, name: "裤子", price: 34, time: new Date("2013-09-01") },
      //   { id: 102, name: "鞋", price: 25.4, time: new Date("2018-11-22") },
      //   { id: 103, name: "头发", price: 19900, time: new Date("2020-12-12") },
      // ],
      // 通过缓存，去拿到list的数据
      // 1.初始化时拿得到这个数据的缓存吗？ => 当拿不到缓存数据时 设置默认值为 []  localStorage.getItem 拿到
      // 2. localStorage储存是什么 => JSON字符串 => 将JSON字符串转化为数组或者对象  JSON.parse
      list:JSON.parse(localStorage.getItem('list')) || []
    };
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

// 缓存数据
    watch: {
      // 由于需要在多个操作结束完成后，才去把新的list数据放到缓存 如果设置在多个方法后 会出现多余代码 且不移维护 通过监听的方式 当list列表发送变化时 去将整个list更新到缓存中
      "list": {
        deep: true,
        handler (newVal) {
          // 将更新后的list数据放到缓存中
          // localStorage里面只能储存JSON字符串
          localStorage.setItem('list', JSON.stringify(newVal))
        }
      }
    },


  methods: {
    // 添加资产
    addFn() {
      // 判断输入框是否为空
      if (this.form.name.trim().length === 0 || this.form.price === 0) {
        alert("值不能为空，金额不能为空");
        return;
      }
      let params = {
        // 当前数组最后一个元素的id + 1
        // id: this.list[this.list.length - 1].id + 1,
        // 当list为空数组时，没有最后一个元素的id
        // 判断如果list.length===0 时 默认id为100
        id: this.list.length > 0 ? this.list[this.list.length - 1].id + 1 : 100,
        name: this.form.name,
        price: this.form.price,
        time: new Date(),
      };
      // 插入表格中
      this.list.push(params);

      //  清空form表单的值
      this.form = {
        name: "",
        price: "",
      };
    },
    // 删除资产方法
    delFn(id) {
      // 通过findIndex 方法找到list中的下标
      let index = this.list.findIndex((value) => value.id === id);
      this.list.splice(index, 1);
    },
  },

    computed: {
        // 总价
        allPrice () {
            // 1.计算list数组中所有金额的累加和
            // let tempPrice = this.list.reduce((sum,obj) => sum += parseFloat(obj.price),0)
                // 方法二
        //     let sum = 0
        //     this.list.forEach(value => {
        //         sum += parseFloat(value.price)
        //     })
        //  return tempPrice
        //    return sum
        // 
        // 简写
        return this.list.reduce((sum, obj) => sum += obj.price,0)
        },
        // 平均价
        svgPrice () {
            return this.list.length <= 0 ? 0 : (this.allPrice / this.list.length).toFixed(2)
        }
    }
   

}
</script>

<style >
.red {
  color: red;
}
</style>