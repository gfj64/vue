<template>
  <div class="my-goods-item">
    <div class="left">
      <div class="custom-control custom-checkbox">
        <!-- ：id=点击图片也能选中 v-model 绑定选中状态 浅复制一份父组件 传递过来的地址-->
        <input type="checkbox" 
        class="custom-control-input" :id="dataObj.id" v-model="dataObjClone.goods_state" />
        <label class="custom-control-label" :for="dataObj.id">
          <img :src="dataObj.goods_img" alt="" />
        </label>
      </div>
    </div>
    <div class="right">
      <div class="top">{{ dataObj.goods_name }}</div>
      <div class="bottom">
        <span class="price">¥ {{dataObj.goods_price}}</span>
        <span>
            <MyCount :obj="dataObj"></MyCount>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import MyCount from './MyCount.vue'
export default {
  components: {
    MyCount
  },
  props: {
    dataObj: {
      type: Object,
      default: ()=>({})
    }
  },
  data () {
    return {
      dataObjClone: this.dataObj
    }
  }
}
</script>

<style lang="less" scoped>
.my-goods-item {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  .left {
    img {
      width: 120px;
      height: 120px;
      margin-right: 8px;
      border-radius: 10px;
    }
    .custom-control-label::before,
    .custom-control-label::after {
      top: 50px;
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .top{
        font-size: 14px;
        font-weight: 700;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      padding: 5px 0;
      align-items: center;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
}

</style>