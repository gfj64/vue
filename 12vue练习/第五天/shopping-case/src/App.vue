<template>
  <div>
    <MyHeader title="购物车"></MyHeader>
      <div class="main">
        <!-- 铺设页面1. 循环盒子里的组件
        将列表的每一个元素作为自定义数据传入GOODS组件中 -->
        <MyGoods
          v-for="obj in list"
          :key="obj.id"
          :dataObj="obj"
        ></MyGoods>
      </div>
    <MyFooter :list="list"></MyFooter>
  </div>
</template>

<script>
// 目标: 项目初始化 - 静态页面
// 1. 创建项目, 下包, 引入bs样式
// 2. 拆分需求组件, 创建 - 分别标签+样式
// 3. App.vue上显示, 微调样式(上下内边距)
import MyHeader from './components/MyHeader'
import MyGoods from './components/MyGoods'
import MyFooter from './components/MyFooter'
export default {
  components: {
    MyHeader,
    MyGoods,
    MyFooter
  },
  data () {
    return {
      // 
      list: []
    }
  },

  created() {
    // 获取购物车列表数据接口
    this.getList()
  },

  methods: {
    // 获取购物车列表数据接口
    getList() {
      this.$axios({
        methods: 'GET',
        url: '/api/cart'
      }).then(res =>{
        console.log(res.data);
        // 将res.data.list赋值给list变量
        this.list = res.data.list
      }).catch(err =>{
        console.log(err);
      })
    }
  }

}
</script>

<style scoped>
    .main {
      padding-top: 45px;
      padding-bottom: 50px;
    }
</style>