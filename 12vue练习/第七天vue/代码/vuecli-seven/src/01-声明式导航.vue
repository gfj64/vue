<template>
  <div>
    <!-- tabbar 切换按钮栏 -->
    <div class="footer_wrap">
      <!-- 1.当使用路由时 a标签的href属性值就是在路由规则数组中创建oath路径 -->
      <!-- <a href="#/find">发现音乐</a>
      <a href="#/my">我的音乐</a>
      <a href="#/part">朋友</a> -->


      <!-- 声明式路由 - 导航 -->
      <!-- 
        1.通过router-link替换a标签
        2.to属性替换a标签中的href属性 - to中不用写#
        3.router-link 提供了两个默认的css类名 通过类名可以动态设置高亮显示
       -->
       <router-link to="/find">发现音乐</router-link>
       <router-link to="/my">我的音乐</router-link>
       <router-link to="/part">朋友</router-link>

    </div>
    <!-- 通过tabbar 切换的内容组件 -->
    <div class="top">
      <!-- 7.router-view 标签，设置组件挂载点，当url的hash（就是路由规则设置的path）路径切换 显示规则里对应的组件 -->
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

/* 通过router-link标签自带的class类名，进行css属性的设置，这样可以展示当前tabbar的高亮状态 */
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