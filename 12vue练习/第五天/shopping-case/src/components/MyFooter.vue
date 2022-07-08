<template>
  <!-- 底部 -->
  <div class="my-footer">
    <!-- 全选 -->
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="footerCheck" v-model="isAll">
      <label class="custom-control-label" for="footerCheck">全选</label>
    </div>
    <!-- 合计 -->
    <div>
      <span>合计:</span>
      <span class="price">¥ {{ allPrice }}</span>
    </div>
    <!-- 按钮 -->
    <button type="button" class="footer-btn btn btn-primary">结算 ( {{ allCount }} )</button>
  </div>
</template>

<script>
//  全选反选
export default {
  props: {
    list:{
      type: Array,
      default:()=>[]
    }
  },
  computed: {
    isAll:{
      // 2. 点击全选 让所有的小选框选中
      set(val) {
        this.list.forEach(obj => {
          obj.goods_state = val
        })
      },
      // 1. 选中小选框 判断是否让全选框自动选中
      get() {
        // every判断所有元素均满足条件
        // 当数组长度为0是 直接返回dalse
        if (this.list.length === 0) {
          return false
        }
        let flag = this.list.every(value => {
          return value.goods_state
        })
        return flag
      }
    },

    allCount () {
      // list 列表中所有被选中的元素goods_count的和
      let sum = this.list.reduce((sum, obj) => {
        // 判断这个元素是否被选中
        if(obj.goods_state === true) {
          sum += obj.goods_count
        }
        return sum
      },0)
      return sum
    },
    // 总价 两种写法
    allPrice() {
      //  一
      // // list 列表中所有被选中的元素goods_count的和
      // let sum = this.list.reduce((sum, obj) => {
      //   // 判断这个元素是否被选中
      //   if(obj.goods_state === true) {
      //     sum += obj.goods_count * obj.goods_price
      //   }
      //   return sum
      // },0)
      // return sum

      //  二 
      // list 列表中所有被选中的元素goods_count的和
      //  在计算之前，先把所有没有选中的元素全部过滤掉
      let sum = this.list.filter(value => value.goods_state).reduce((sum, obj) => {
        sum += obj.goods_count * obj.goods_price
        return sum
    },0)
    return sum
    }
  }
}
</script>

<style lang="less" scoped>
.my-footer {
  position: fixed;
  z-index: 2;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: #fff;

  .price {
    color: red;
    font-weight: bold;
    font-size: 15px;
  }

  .footer-btn {
    min-width: 80px;
    height: 30px;
    line-height: 30px;
    border-radius: 25px;
    padding: 0;
  }
}
</style>