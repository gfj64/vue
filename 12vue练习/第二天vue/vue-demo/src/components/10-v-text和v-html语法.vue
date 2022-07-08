<template>
  <div>
       <!-- v-text v-html 会覆盖标签内的所有子元素且不允许在标签内写 -->
       <p v-text="str"></p>
       <p v-html="str"></p>
       <!-- 注意 V-text 和 v-html 会覆盖插值表达式 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
        str:'<span>我是一个span</span>',
    };
  },
  methods: {

  },
};
</script>

<style lang="less" scoped>

</style>