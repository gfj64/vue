<template>
  <div>
       <ul>
        <!-- 如果直接通过v-if 判断是否显示当前的标签时，会有多余的循环解析产生，影响代码效率 -->
        <!-- 解决办法：在循环时，就没有v-if不去选择的数组元素 -->
        <!-- <li v-for="value in arr" :key="value.id" v-if="value.isShow">{{value.name}}</li> -->
<!-- filter 过滤器 -->
        <li v-for="value in arr.filter((item)=>item.isShow)" :key="value.id">{{value.name}}</li>
        <!-- 如果涉及到v-for和v-if的同时使用时，将v-if的条件判断写到数组的filter方法中 -->
       </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
        arr:[
            {id:1,name:1, isShow:true},
            {id:2,name:2, isShow:true},
            {id:3,name:3, isShow:false},
            {id:4,name:4, isShow:true},
        ]
    };
  },
  methods: {

  },
};
</script>

<style scoped>

</style>