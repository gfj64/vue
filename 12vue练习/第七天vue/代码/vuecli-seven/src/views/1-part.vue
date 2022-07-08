<template>
  <div>
      <p>关注明星</p>
      <p>发现精彩</p>
      <p>寻找伙伴</p>
      <p>加入我们</p>
<!-- 通过$route 来获取 路由跳转过来的变量 -->
<p>
    <!-- 、path?name=值 -->
    方式1： {{ $route.query.name }}
</p>
<p>
    <!-- /path/值 -->
    方式2： {{ $route.params.username }}
</p>

  </div>
</template>

<script>
    export default {
        mounted() {
    console.log(this.$route.query)
    console.log(this.$route.params)
    },
}
</script>