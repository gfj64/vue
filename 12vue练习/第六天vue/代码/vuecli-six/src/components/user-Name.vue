<template>
  <div>
       <div>
          <span>人生格言:</span>
          <input type="text">
      </div>
      <div>
          <span>个人简介:</span>
          <textarea></textarea>
      </div>
  </div>
</template>

<script>
export default {
    created () {
      console.log('创建');  
    },

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

    };
  },
  methods: {

  },
};
</script>

<style lang="less" scoped>

</style>