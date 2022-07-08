<template>
  <div id="container">
    <div id="app">
      <h3>案例：折叠面板</h3>
      <Pannel>
        <!-- 需求: 插槽时, 使用组件内变量 -->
        <!-- scope变量: {row: defaultObj} -->
        <template v-slot:pannel="scope">
          <p>{{ scope.row.defaultTwo }}</p>
        </template>
      </Pannel>
      
    </div>
  </div>
</template>

<script>
import Pannel from "../components/4-pannel.vue";
export default {
  components: {
    Pannel,
  },
};
</script>