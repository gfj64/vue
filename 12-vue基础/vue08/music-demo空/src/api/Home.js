//  文件名-尽量和模块页面文件名统一 （方便查找）
import request from '../utils/request.js'

// 首页 推荐歌单
export const recommendMusic = params => request({
    url: '/personalized',
    //  将来外面可能传入params的值{limit：20}
    params
})

// 推荐音乐
export const newMusic = params => request({
    url: "/personalized/newsong",
    params
})