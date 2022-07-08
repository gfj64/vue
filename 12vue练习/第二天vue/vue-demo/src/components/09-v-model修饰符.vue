<template>
  <div>
    <div>
        <span>年龄</span>
<!-- 通过 .number修饰符设置的input输入框有以下几点
1. 把值以parseFloat的形式转化为数字，在赋值给v-model绑定的数据源
2.如果输入框中的内容开头就是非数字，则不作任何修改
3.通过修饰符转换后的文本 如果为数字这个变量时Number类型 -->
        <input type="text" v-model.number="age" />
        <input type="text" v-model="str" />
    </div>

    <div>
        <span>去除收尾空格</span>
        <!-- 常用 -->
        <input type="text" v-model.trim="str2" />
    </div>

    <div>
        <span>个人介绍</span>
        <!-- .lazy修饰符 -失去焦点类容改变时（change） ，把内容同步给v-model的变量 不会实时同步 只有失去焦点内容改变才会同步-->
        <input type="text" v-model.lazy="str3" />
    </div>
       
  </div>
</template>

<script>
export default {
  data() {
    return {
        age:'',
        str:'',
        str2:'',
        str3:'',
        
    };
  },
  methods: {

  },
};
</script>

<style lang="less" scoped>

</style>