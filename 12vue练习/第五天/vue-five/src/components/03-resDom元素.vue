<template>
  <div>
       我是resDom的child
  </div>
</template>

<script>
export default {
  data() {
    return {
        obj: {
            name:123,
            age: 123
        }
    };
  },
  methods: {
    fn() {
        console.log('fn方法');
    }
  },
};
</script>

<style lang="less" scoped>

</style>