<template>
  <div>
       <button @click="fn()">查询图书信息</button>
       <h2>查找某本书</h2>
       <input type="text" placeholder="请输入要查询 的书名" v-model="bName" />
        <button @click="searchBook()">查询</button>

        <p>3. 新增图书信息</p>
    <div>
        <input type="text" placeholder="书名" v-model="bookObj.bookname">
    </div>
    <div>
        <input type="text" placeholder="作者" v-model="bookObj.author">
    </div>
    <div>
        <input type="text" placeholder="出版社" v-model="bookObj.publisher">
    </div>
    <button @click="sumbit()">发布</button>
  </div>
</template>

<script>
//1. 引入axios依赖
import axios from 'axios'

// 3. 全局配置axiosurl地址
axios.defaults.baseURL = "http://123.57.109.30:3006"
export default {
  data() {
    return {
        bName: '',
        // 参数名提前和后台的参数名对上-发送请求就不用再次修改
         bookObj: { 
                    bookname: "",
                    author: "",
                    publisher: ""
                }
    };
  },
  methods: {
    fn() {
        //2.通过axios调用接口
        axios({
            method: 'get',
            url: '/api/getbooks'
        }).then(res =>{
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    },
    // 查询书籍
    searchBook() {
        // 1.创建一个入参对象
        let params = {
            bookname: this.bName
        }
        // 2. 调用接口
        axios({
            method: 'get',
            url: '/api/getbooks',
            // get请求用params来接收传入参数
            params: params
        }).then(res =>{
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    },

    // 新增书籍
    sumbit() {
        // 1.创建入参对象
        let params = {
            appkey: "7250d3eb-18e1-41bc-8bb2-11483665535a",
            bookname: this.bookObj.bookname,
            author: this.bookObj.author,
            publisher: this.bookObj.publisher
        }

        // 2.调用接口
        axios({
            method: 'POST',
            url: '/api/addbook',
            data: params
        }).then(res =>{
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }

  },
};
</script>

<style lang="less" scoped>

</style>