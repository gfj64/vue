<template>
  <div>
    <!-- 当一个组件向另一个组件传值 -->
    <!-- 步骤：
    1. 在子组件的props里面定义变量 接收值 并把变量写在页面
    2. 父组件 定义值在data里面定义一个list数组 Demo02通过属性传值的方式给到子组件
     -->
    <!-- 3. 挂载组件 -->
    <!-- 3. 父组件向子组件传参
        通过属性传值的方式给到子组件
    -->
    <!-- 1. 给子组件自定义事件 -->
    <!-- 当给子组件设置自定义事件时， 一定注意不要给方法加小括号  v-for循环list把数据插入属性 -->
    <Demo02
      v-for="(obj, index) in list"
      :key="index"
      :title="obj.proname"
      :price="obj.proprice"
      :desc="obj.info"
      :id="obj.id"
      @changPrice="changPriceFn"
    >
    <!-- ：key 提高更新的性能  有id用id 没id用索引(index) -->
    </Demo02>
    <!-- // 1. 父组件内 给组件@自定义事件="父的menthods函数" 上面才是 -->

    
    <button @click="() => { list[0].proprice = 100 }">改变list</button>
  </div>
</template>

<script>
// 1. 引入组件
import Demo02 from './02-props子组件.vue'
export default {
  name: 'App',
  // 2. 注册组件
  components: {
    Demo02
  },
  data() {
    return {
      titleData: '好吃口水鸡',
      list: [
        {
          id: 1,
          proname: "超级好吃的棒棒糖",
          proprice: 18.8,
          info: "开业大酬宾, 全场8折",
        },
        {
          id: 2,
          proname: "超级好吃的大鸡腿",
          proprice: 34.2,
          info: "好吃不腻, 快来买啊",
        },
        {
          id: 3,
          proname: "超级无敌的冰激凌",
          proprice: 14.2,
          info: "炎热的夏天, 来个冰激凌了",
        },
      ],
      objData: {
        id: 1,
        title: "超级好吃的棒棒糖",
        price: 18.8,
        desc: "开业大酬宾, 全场8折",
      }
    }
  },
  methods: {
    // 子影响父的方法 步骤：
    // 1. 父组件内 给组件@自定义事件="父的menthods函数"
    // 2.子组件内 恰当时机this.$emit("自定义事件名称", 参数)
    changPriceFn (id) {
      console.log(id)
      // 1. 获取到子组件中的id后，通过查找列表中对应的元素，修改价格
      let index = this.list.findIndex(value => value.id === id)
       // 2. 根据索引修改价格  短路与判断 价格小于1了就不在减了
      this.list[index].proprice >1 && (this.list[index].proprice -= 1)
      // 2. 根据索引修改价格
      // this.list[index].proprice -= 1
      // 3. 解决浮点数
      this.list[index].proprice = this.list[index].proprice.toFixed(2)
    }
  },
}
</script>

<style scoped>
</style>
