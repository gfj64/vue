<template>
  <div>
    <!-- tabbar 切换按钮栏 -->
    <div class="footer_wrap">
      <!-- 1. 当使用路由时， a标签中的href属性的属性值就是在路由规则数组中创建的path路径 -->
      <a href="#/find">发现音乐</a>
      <a href="#/my">我的音乐</a>
      <a href="#/pa">朋友</a>
    </div>

    <!-- 通过tabbar切换的内容组件 -->
    <div class="top">
      <!-- 2. router-view 标签，设置组件挂载点， 当url的hash（就是路由规则设置的path）路径切换，显示规则里对应的组件 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap a:hover {
  background-color: #555;
}
.top {
  padding-top: 62px;
}
</style>