<template>
  <div>
    <!-- 如果引用的组件是多个单词所拼接得到的驼峰命名，那么希望以小写短横线进行拼接 -->
    <a-demo></a-demo>
    <hr />
    <b-demo></b-demo>
  </div>
</template>

<script>
import ADemo from './组件间的传值/03-a.vue'
import BDemo from './组件间的传值/04-b.vue'
export default {
  components: {
    ADemo,
    BDemo
  },

  props: [],

  data() {
    return {
      
    }
  },
}
</script>

<style>

</style>