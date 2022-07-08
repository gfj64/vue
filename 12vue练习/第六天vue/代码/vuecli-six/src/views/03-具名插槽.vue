<template>
  <div id="container">
    <div id="app">
      <h3>案例：折叠面板</h3>
      <Pannel>
        <!-- v-slot插槽名称 -->
        <template v-slot:title>
          <h4>芙蓉楼送辛渐</h4>
        </template>

        <template v-slot:content>
          <img src="../assets/preview.gif" alt="">
          <span>我是内容</span>
        </template>
      </Pannel>

      <pannel>
        <!--   通过v-slot:具名插槽名称="自定义插槽作用域变量" - 自定义插槽作用域变量只能作用域template标签中
        这个自定义命名的变量 接收到的参数是 子组件中slot标签自定义属性姓名已经对应的变量值 -->
        <template v-slot:title="xxx">
          <div>
            {{xxx.arr}}
          </div>
        </template>
      </pannel>
      <Pannel>
        <!-- 简写方式 v-slot: 简写 # 号-->
        <template #title>
          <span style="color: red;">我是标题</span>
        </template>
        <template #content>
          <p>寒雨连江夜入吴,</p>
          <p>平明送客楚山孤。</p>
          <p>洛阳亲友如相问，</p>
          <p>一片冰心在玉壶。</p>
        </template>
      </Pannel>
    </div>
  </div>
</template>

<script>
//  具名插槽 步骤
// 1. slot占位 - name属性取名字
// 2. 使用组件 template 配合v-slot: 插槽名 包裹着传入具体标签
import Pannel from "../components/3/01-pannel.vue";
export default {
  components: {
    Pannel,
  },
};
</script>