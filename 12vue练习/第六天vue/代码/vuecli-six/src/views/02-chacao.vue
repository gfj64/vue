<template>
  <div id="container">
    <div id="app">
      <h3>案例：折叠面板</h3>
      <Pannel>
        <h1>数据</h1>
      </Pannel>
      <Pannel>
        <p>寒雨连江夜入吴,</p>
        <p>平明送客楚山孤。</p>
        <p>洛阳亲友如相问，</p>
        <p>一片冰心在玉壶。</p>
      </Pannel>
      <Pannel>
        <img src="../assets/preview.gif" alt="">
      </Pannel>
      <!-- 设置默认内容 -->
      <Pannel></Pannel>
    </div>
  </div>
</template>

<script>
// 为了让封装的组件显示不同的标签结构 步骤
// 1. 组件内 <slot></slot> 占位
// 2. 使用组件 传入具体的标签替换到 slot 位置上
import Pannel from "../components/2/2.1-pannel.vue";
export default {
  components: {
    Pannel,
  },
};
</script>

<style scoped>
#app {
  width: 400px;
  margin: 20px auto;
  background-color: #fff;
  border: 4px solid blueviolet;
  border-radius: 1em;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  padding: 1em 2em 2em;
}
</style>