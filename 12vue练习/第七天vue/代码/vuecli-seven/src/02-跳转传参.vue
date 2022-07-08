<template>
  <div>
    <!-- tabbar 切换按钮栏 -->
    <div class="footer_wrap">
       <router-link to="/find">发现音乐</router-link>
       <router-link to="/my">我的音乐</router-link>
       <!-- 两种方式 -->
       <!-- to= /path?参数名=参数值1 & 参数名=参数值2
        接收： $route.query.参数名
       -->
       <router-link to="/part?name=A">朋友A</router-link>
       <!-- /path/参数值 
          路由规则中的设置: /path/:参数名
          接收;  $route.query.参数名 -->
       <router-link to="/part/B">朋友B</router-link>

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

.footer_wrap .router-link-active {
  color: white;
  background-color: black;
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