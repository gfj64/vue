<template>
  <div>
    <!-- tabbar 切换按钮栏 -->
    <div class="footer_wrap">
       <!-- <router-link to="/find">发现音乐</router-link>
       <router-link to="/my">我的音乐</router-link>
       <router-link to="/part">朋友</router-link> -->
<!-- 2. 修改成span标签 -->
       <span @click="routerPush('/find','find')">发现音乐</span>
       <span @click="routerPush('/my','my')">我的音乐</span>
       <span @click="routerPush('/part','part')">朋友A</span>
       <span @click="routerPush('/part','part')">朋友B</span>
    </div>
    <div class="top">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
       routerPush (path, name) {
        console.log(path, name);
        // 编程式 跳转路由
        this.$router.push({
            // path和name只能存在一个
            // path:path,
            name: name,

            // 1. 通过query进行参数的传递，通过$route.query来接收
            // 2. 通过query传参会拼接url后
            // 3.通过query传递拼接到url后的参数 页面刷新后不会丢失
            // 4.path跳转路由 会自动忽略params的传参

            // 代码规范1：一般 传递的数据量大时 使用query 反之使用params
            // 代码规范2： 使用path跳转时 传参用query 使用name跳转时 传参用params

            query: {
                name: '张三'
            },

            // 1. 通过params进行传参 通过$route.params来接收
            // 2.params的传参方式不会显示到url上
            // 3. 通过params传递参数，页面刷新后会丢失
           params: {
            username: 123
           }
        })
       } 
    }
};
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
.footer_wrap span {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap span:hover {
  background-color: #555;
}
.top {
  padding-top: 62px;
}
</style>