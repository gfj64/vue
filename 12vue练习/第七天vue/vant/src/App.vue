<template>
  <div>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script>
// 手动单独引入组件(不推荐)
// import Button from 'vant/lib/button';
// import 'vant/lib/button/style';
export default {
  components: {
    // [Button.name]: Button,
    // VanButton: Button
  }
};
</script>

<style>
</style>