<template>
  <div>
       <input type="text" v-model="name" />
       <input type="text" v-model="obj.name" />
  </div>
</template>

<script>
export default {
  data() {
    return {
        name: '',
        obj: {
            name:''
        }
    };
  },
  /**
   *  watch: {
   *    '被监听的属性名 （data中的属性 ，计算属性）' () {
   *        执行函数
   *    }
   *  }
   */

  watch: {
    // newValue 最新值  oldVal  更新前的值
    "name" (newNal, oldValue) {
        console.log(newNal, oldValue);
    },
    
  },

  methods: {

  },
};
</script>

<style scoped>

</style>