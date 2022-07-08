<template>
  <div>
    <!-- 语法1 
    v-for="(value, index) in 目标数据结构"
    每一个for循环都需要添加一个动态属性 key ，来表现循环过程中的每个被循环出来的标签结构唯一且不同 一般用循环的索引来作为key -->
       <ul>
        <li v-for="(value, index) in arr" :key="index">{{ value }}</li>
       </ul>

<!-- 语法2
    v-for="value in 目标数据结构"
    一般情况下这种写法是作用在带有id的数值对象上的-->
       <ul>
        <li v-for="(value, index) in arr2" :key="index">
        {{value}}</li>
        </ul>
    <!-- 语法三
       v-for是可以遍历对象的
       一般情况下 遍历得到的对象中每个元素的key作为 这个标签：key数 -->
        <ul>
            <li v-for="value in arr2" :key="value.id">
            {{value.name}}</li>
        </ul>
    <!-- 语法四
       当明确知道需要遍历多少次标签时，可以遍历数字 -->
        <ul>
            <li v-for="(value, key) in obj" :key="key">
            {{value}}</li>
        </ul>
       <!-- 当明确知道需要遍历多少次标签时，可以遍历数字 -->
       <ul>
        <li v-for="n in 10" :key="n">{{n}}</li>
       </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
        arr: [1,2,3],
        arr2: [
            {id:1,name:11},
            {id:2,name:22},
            {id:3,name:33},
        ],
        obj: {
            age:10,
            name: 'lbw'
        }
    };
  },
  methods: {

  },
};
</script>

<style scoped>

</style>