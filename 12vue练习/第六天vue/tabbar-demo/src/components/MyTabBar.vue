<template>
  <div class="my-tab-bar">
    <!-- 当剪辑选中tabbar时，来高亮当前选中目标 -->
    <!-- 通过点击事件，来修改一个公共变量 => 当前选中的索引号 -->
    <div class="tab-item" v-for="(obj, index) in arr" :key="index" :class="{current: activeIndex === index}" @click="checkTab(index)">
      <!-- 图标 -->
      <span class="iconfont" :class="[obj.iconText]"></span>
      <!-- 文字 -->
      <span>{{obj.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    arr: {
      type: Array,
      default: () => [],
       // 自定义校验规则
      validator(value) {
        // value就是接到数组
        if (value.length >= 2 && value.length <= 5) {
          console.log('合理')
          return true; // 符合条件就return true
        } else {
          console.error("数据源必须在2-5项");
          return false;
        }
      },
    }
  },

  data() {
    return {
      activeIndex: 0 // 高亮元素的下标
    }
  },

  methods: {
    checkTab (index) {
      // 将这个index放到公共变量中
      this.activeIndex = index
      // 通过$emit让父组件改掉comName的组件名称
      this.$emit('changeCom', this.arr[index].componentName)
    }
  },
}
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
    
.current {
  color: #1d7bff;
}
</style>