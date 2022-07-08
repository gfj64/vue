// 搜索模块
import request from '../utils/request.js'

// 热搜关键字
export const hotSearch = params => request({
  url: '/search/hot',
  method: 'GET',
  params
})

// 搜索结果
export const searchResultList = params => request({
  url: '/cloudsearch',
  method: 'GET',
  params
})