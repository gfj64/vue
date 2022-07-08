<template>
  <div>
    <!-- 登录模块 -->
       <div>
         <span>用户名：</span>
         <!-- 1. v-model 双向数据绑定 value属性 - vue变量 -->
         <input type="text" v-model="username" />
       </div>
       <div>
        <span>密码：</span>
        <input type="password" v-model="password" />
       </div>
       <button @click="submit()">提交</button>

       <div>
        <span>下拉选择框</span>
        <select v-model="selectFrom">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
       </div>
       
      <div>
         <div>复选框和单选框</div>
         <span>爱好:</span>
         <!-- 复选框的 V-model替换的是name 其变量需要一个数组 -->
            <input type="checkbox" v-model="checkList" value="吃饭" />吃饭
            <input type="checkbox" v-model="checkList" value="睡觉" />睡觉
            <input type="checkbox" v-model="checkList" value="敲代码" />敲代码

            <div>单选框：</div>
            <!-- 单选框的v-model 替换的是name，其变量 需要是一个字符串 -->
            <input type="radio" name="sex" v-model="sex" value="男" />男
            <input type="radio" name="sex" v-model="sex" value="女" />女
      </div>

      <div>文本域</div>
      <!-- 文本域 v-model写在标签里面的 同时 双标签中间不要去添加任何内容-->
      <textarea v-model="txt"></textarea>
  </div>
</template>

<script>
export default {
    // 变量写在data的return
  data() {
    return {
        username: '',
        password: '',
        selectFrom: '',
        checkList: [],
        sex: ''
    };
  },
  // 方法
  methods: {
    submit() {
        console.log(this.username,this.password);
    }
  },
};
</script>

<style lang="less" scoped>

</style>