// api文件下 各个请求模块js 都统一来到index.js再向外导出
import {newMusic, recommendMusic} from './Home.js'
// 请求推荐歌单的方法导出
export const recommendMusicAPI = recommendMusic
// 最新音乐
export const newMusicAPI = newMusic

import { hotSearch, searchResultList } from './Search'

export const hotSearchAPI = hotSearch // 搜索 - 热搜关键词
export const searchResultListAPI = searchResultList // 搜索 = 搜索结果