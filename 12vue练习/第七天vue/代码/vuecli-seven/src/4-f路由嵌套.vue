<template>
  <div>
    <!-- <p>推荐</p>
    <p>排行榜</p>
    <p>歌单</p> -->
  <!--      路由嵌套 
         1.在main.js规则里面 写入二级规则
         2. 且引入这个文件
         3. 在这个文件使用路由嵌套-->
     <div @click="routerPush('/find/Recommend')">推荐</div>
     <div @click="routerPush('/find/Ranking')">排行榜</div>
     <div @click="routerPush('/find/SongList')">歌单</div>

        <!-- 放二级路由的组件 -->
    <div style="border: 1px solid red;">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    
    beforeRouteEnter(to, from, next) {
            // 在渲染该组件的对应路由被 confirm 前调用
            // 不！能！获取组件实例 `this`
            // 因为当守卫执行前，组件实例还没被创建
            console.log('进find')
            next()
        },
        beforeRouteUpdate(to, from, next) {
            // 在当前路由改变，但是该组件被复用时调用
            // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
            // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
            // 可以访问组件实例 `this`
            console.log('被复用')
            next()
        },
        beforeRouteLeave(to, from, next) {
            // 导航离开该组件的对应路由时调用
            // 可以访问组件实例 `this`
            console.log('离开')
            next()
        },



   methods: {
    routerPush (path) {
      console.log(path);
      // 编程式 跳转路由
      this.$router.push({
        path: path
      })
    }
   }
  }
</script>

<style >

</style>