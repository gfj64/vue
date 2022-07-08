<template>
  <div>
      <p>我的收藏</p>
      <p>我的历史记录</p>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.query)
     console.log(this.$route.params)
  },

}
</script>

<style>

</style>