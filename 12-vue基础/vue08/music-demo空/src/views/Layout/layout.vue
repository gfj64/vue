<template>
  <div>
    <!-- 头部导航栏 -->
    <van-nav-bar 
    :title="activeTitle" 
    />

    <!-- 二级路由挂载点 -->
    <router-view></router-view>
    <!-- 底部导航栏 -->
    <van-tabbar route>
      <van-tabbar-item replace to="/layout/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/layout/search" icon="search">搜索</van-tabbar-item>

    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'layout-index',
  data() {
    return {
      // 默认 顶部导航要显示的标题（默认获取当前路由对象的meta中的title值）
      activeTitle: this.$route.meta.title,
    };
  },
  //  路由切换 侦听$route对象改变
  watch: {
    $route () {
      // 提取切换后路由的信息对象里的title显示
      this.activeTitle = this.$route.meta.title
    }
  }
};

</script>

<style scoped>
/* 中间内容区域 - 容器样式(留好上下导航所占位置) */
.main {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>