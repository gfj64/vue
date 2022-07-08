<template>
  <div>
       <!--  过滤器的写法, {{ 变量(值) | 过滤器名称 }} -->
       <div>{{ str | toUp }}</div>
       <div>{{ str | reverse('x') }}</div>
       <!-- 通过多个过滤器 -->
       <div>{{ str | toUp | reverse('|') }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        str: 'string'
    };
  },
//   方法二：过滤器
filters: {
    reverse (value, q) {
        // 如何在拼接join方法时 自定义符号
        return value.split('').reverse().join(q)
    },
},
  methods: {

  },
};
</script>

<style scoped>

</style>