<template>
  <div>
       <h2>获取DOM元素</h2>
       <div id="myD">我是一个div</div>
       <h2>通过ref获取DOM元素</h2>
       <!-- 2.1. 在需要的元素上 添加ref属性，为这个标签添加标记 -->
       <div ref="myRefDiv">div2</div>

       <!-- 2. -->
       <more-child ref="MoreChild"></more-child>
  </div>
</template>

<script>
import moreChild from './03-resDom元素.vue'
export default {
  components: {
      moreChild
  },

  data() {
    return {

    };
  },
  /** 功能：
   * 1. $refs可以代替document.querySelector / getElementByxxx 
   */

  mounted () {
    console.log(document.querySelector('#myD'));

    // 2. 通过$refs来对有ref标记的元素进行查找
    console.log(this.$refs.myRefDiv);

    // 3. 获取数组
    let template=this.$refs.MoreChild
    console.log(template.obj);
    console.log(template.fn());
  }
};
</script>

<style scoped>

</style>