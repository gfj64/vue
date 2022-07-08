<template>
  <div>
       <input type="text" v-model="obj.name" />
  </div>
</template>

<script>
export default {
  data() {
    return {
        name: '',
        obj: {
            name: ''
        }
    };
  },

    watch: {
      // 简单数据监听对象   监听一个值而后修改一个值 用下列方法
        // "obj": {
    //     immediate: true, // 立即执行
    //     deep:true,  // 深度监听复杂类型变化
    //     handler (newValue,oidValue) {
    //         console.log(newValue,oidValue,this.obj);
    //     }
    // },
    
// 复杂数据类型监听  只监听一个值的修改新旧数据 用
    "obj.name" (newValue,oidValue) {
        console.log(newValue,oidValue);
    }
},

  methods: {
    }
};
</script>

<style scoped>

</style>