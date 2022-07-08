import Vue from 'vue' // 引入vue
// 引入App.vue文件模块 这个文件是作为说要vue文件的入口
import App from './App.vue'
// 1.引入router
import VueRouter from 'vue-router'

// 3. 创建路由规则数组
import Find from './views/1-find copy.vue'
import my from './views/1-my.vue'
import part from './views/1-part.vue'
import NotFound from './views/NotFound.vue'
// 路由嵌套
import Recommend from './views/second/1-Recommend.vue'
import Ranking from './views/second/1-Ranking.vue'
import SongList from './views/second/1-SongList.vue' 

const routes = [
  // 设置默认hash（哈希）路由路径
  // 重定向路由的两种使用场景
  // 1. 当需要进入到某个路由页面时让其跳转到另一个路由页面=> redirect属性实现重定向
  // 2.当用户输入了一个路由规则列表中没有设置的路由时 跳转到404页面=> path: '*'
  //  注意 path: '*' 一定要写到路由规则列表的最后
  {
    // 设置默认路径
    path: '/',  //默认的路径
    // 当页面跳转到默认路径为'/' 自动重新定向到/find 路由页面
    name: 'window',
    redirect: '/find'
  },
  {
    path: '/find',
    name: 'find', // 添加name属性
    component: Find,
    // find的子路由
    children: [
      // 在子路由中的path可以不加
      {
        path: "Recommend",
        component: Recommend
      },
      {
        path: "Ranking",
        component: Ranking
      },
      {
        path: "SongList",
        component: SongList
      },
    ]
  },
  {
    path: '/my',
    name: 'my',
    component: my
  },
  {
    path: '/part',
    name: 'part',
    component: part
  },
  {
    // 如果通过 /path/参数值 的跳转方式是 参数名要写在路由后
    // /:参数值  的形式表现
    path: '/part/:username',
    component: part
  },
  {
    path: '*', // * 表示匹配所有路由路径
    component: NotFound
  },
]

//  一个控制台打印的提示
Vue.config.productionTip = false
// 2.挂载VueRouter
Vue.use(VueRouter)

// 如果通过编程式导航跳转到相同页面，同时，传递的query参数也一样，浏览器就会因为冗余导航进行警告不会继续跳转操作
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 5. 生成路由对象（传入配置对象）
const router = new VueRouter({
  routes: routes, // router是固定key（传入规则数组）
  //  将路由模式改为history模式， 和hash模式的区别仅在于没有#号  不怎么用
  // mode: 'history'
})


// 目标: 路由守卫
// 场景: 当你要对路由权限判断时
// 语法: router.beforeEach((to, from, next)=>{//路由跳转"之前"先执行这里, 决定是否跳转})
// 参数1 to: 要跳转到的路由 (路由对象信息)    目标
// 参数2 from: 从哪里跳转的路由 (路由对象信息)  来源
// 参数3 next: 函数体 - next()才会让路由正常的跳转切换, next(false)在原地停留, next("强制修改到另一个路由路径上")
// 注意: 如果不调用next, 页面留在原地

// 例子: 判断用户是否登录, 是否决定去"我的音乐"/my
router.beforeEach((to, from , next) => {
  // 判断要跳转的目标是否是/my
  if (to.path === '/my') {
    alert('禁止入内')
    next(false) // 阻止跳转 留在原地不跳转路由
    // next('/pa') //跳转到括号里的路由位置 强制换成对应path路径跳转
  } else {
    next() // 正常执行  放行
  }
})



// 实例化vue对象
new Vue({
  // 4. 将路由对象实例化注入到vue实列中 可以在整个项目中通过this.$router或者this.$route
  router: router,
  // 告诉vue去渲染 App.vue页面
  render: h => h(App),
  // $mount是让这个渲染页面放置在public/index，html中带有id为App的div中
}).$mount('#app')
