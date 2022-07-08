// 路由-相关模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout/layout.vue'
import Home from '../views/Home/home.vue'
import Search from '../views/Search/search.vue'
import Play from '../views/Play/play.vue'

Vue.use(VueRouter)
const routes = [
    {
        path: '/', // 开启项目进入首页，也就是重定向至首页
        redirect: '/layout'
    },
    {
        path: '/layout',
        component: Layout,
        redirect: '/layout/home', // 马上定向到二级路由
        children: [
            {
                path: 'home',
                component: Home,
                meta: { // meta 保存路由对象额外信息的
                    title: "首页"
                }
            },
            {
                path: 'search',
                component: Search,
                meta: {
                    title: "搜索"
                }
            }
        ]
    },
    {
        path: '/play',
        component: Play
    }
]

// 导出
const router = new VueRouter({
    routes
})

export default router