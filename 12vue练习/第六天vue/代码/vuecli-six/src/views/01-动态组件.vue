<template>
  <div>
    <!-- 动态组件 -->
    <button @click="flag = true; componentId='UserInfo'" >账号密码</button>
    <button @click="flag = false; componentId='UserName'">个人介绍</button>
  <!-- 以前的方法 -->
    <!-- <UserInfo v-if="flag"></UserInfo>
    <UserName v-else></UserName> -->
    <!-- 子组件的公用标签，通过is中的组件名的不同，来切换组件 -->
    <!-- 组合子组件的用法
        1. 创建一个component标签 这个标签中有一个必填属性 :is
        2. is中的属性值 （字符串）它代表的是当前展示组件的组件名称 （components中定义名称）
        3.通过修改这个is属性值 来达到切换组件的作用 -->
    <!-- 通过keep-alive内置组件来实现 切换的子组件缓存而不是销毁 -->
    <keep-alive>
      <component :is="componentId"></component>
    </keep-alive>
  </div>
</template>

<script>
//  步骤： 动态组件 - 切换组件显示
//  1. 创建要被切换的组件 - 标签+样式
//  2. 引入到要展示的vue文件中 注册
// 3. componentId 变量-承载要显示的组件名
// 4. 设置挂载点<component :is="变量"></component>
// 5. 点击按钮-切换 componentId 的值为要显示的组件名
import UserInfo from '../components/userInfo.vue'
import UserName from '../components/user-Name.vue'
export default {
  components: {
    UserInfo,
    UserName
  },
  created () {
      console.log('创建');  
    },
// 组件缓存下- 多了2个构造函数
    activated () {
        // alert('已切换到用户')
        console.log('激活');
    },
    deactivated () {
      console.log('失活');  
    },
    
    destroyed () {
      console.log('销毁');  
    },

  data() {
    return {
      // flag: true,
      componentId: 'UserInfo'
    };
  },
  methods: {

  },
};
</script>

<style lang="less" scoped>
</style>