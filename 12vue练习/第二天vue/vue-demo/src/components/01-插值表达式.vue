<template>
<!-- 每一个vue中的<template>只能写一个标签div -->
    <!-- 快捷生成vue结构的方法：<vue + 回车 -->
  <div>
    <!-- 把值赋予到到标签 -->
    <!-- 可以放一个键 -->
     <div>{{msg}}</div>
     <!-- 可以放 对象里面的属性 -->
        <div>{{obj.name}}</div>
        <!-- 可以写 三元 表达式 但是不能写判断语句 -->
        <div>{{obj.age>= 18 ? '成年' : '未成年' }}</div>  
  </div>
</template>

<script>
export default {
    // 如果没有设置name属性，则这个组件的name为该文件的文件名 多个单词进行拼接取名
    // name: '',
// 1.将变量放到script标签z中
//所有的数据(变量),需要放到一个data函数的return对象中
// data函数返回的对象用key属性声明
    data() {
        return {
            // 简单数据类型
            msg: 'Hello World!',
            obj: {
                name: '张三',
                age: 18
            }
        }
    },
};
</script>

<style scoped>

</style>