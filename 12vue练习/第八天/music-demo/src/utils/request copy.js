// 网络请求 - 二次封装
import axios from 'axios'
axios.defaults.baseURL = "http://localhost:3000"

axios.interceptors.response.use(res => {
  return res.data
})

export default axios