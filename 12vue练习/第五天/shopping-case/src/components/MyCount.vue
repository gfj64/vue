<template>
  <div class="my-counter">
<!-- 当点击-号时.goods_count 减少1 但是不能小于等于0 -->
<!-- 当不能减少时 可以禁用这个-号按钮 -->
    <button type="button" class="btn btn-light" :disabled="obj.goods_count === 1" @click="changeCount('-')">-</button>
    <input type="number" class="form-control inp" v-model="objClone.goods_count">
    <!-- 点击加一 -->
    <button type="button" class="btn btn-light" @click="changeCount('+')">+</button>
  </div>
</template>

<script>
export default {
  props: {
    obj: {
      type: Object,
      default:() => ({})
    }
  },
  data() {
    return {
      // 防止直接修改父组件传递过来的值，赋值过程就是让objClone与obj拥有相同对地址
      objClone:this.obj,
      num: 1
    }
  },

  // 通过监听 如果数值小于1 了 那么强制变成1 两种方法
  // 一
  // watch: {
  //   objClone: {
  //     deep:true,
  //     immediate: true,
  //     handler() {
  //       if (this.objClone.goods_count < 1) {
  //         this.objClone.goods_count = 1
  //       }
  //     }
  //   }
  // 二
    'objClone.goods_count' () {
      if (this.objClone.goods_count < 1) {
        this.objClone.goods_count = 1
    }
  },
  

  methods: {
    changeCount (type) {
      if(type === '-') {
      // 当点击-号后，goods_count 减少1 但是不能<=0
        if(this.objClone.goods_count > 1) {
          this.objClone.goods_count--
        }
      }else{
        this.objClone.goods_count++
      }
      // 查看真正的数据结构有无改变
      console.log(this.obj);
    }
  }
}
</script>

<style lang="less" scoped>
.my-counter {
  display: flex;

  .inp {
    width: 45px;
    text-align: center;
    margin: 0 10px;
  }

  .btn,
  .inp {
    transform: scale(0.9);
  }
}
</style>