<template>
  <div>
    <!-- 按钮标题 -->
    <div class="title">
        <slot nmae="title">默认标题</slot>
      <span class="btn" @click="isShow = !isShow">
        {{ isShow ? "收起" : "展开" }}
      </span>
    </div>
    <!-- 下拉内容 -->
    <div class="container" v-show="isShow">
    <!-- 插槽的作用：可以灵活的将一些标签内容插入到子组件的特定位置 -->
     <slot name="content">
         <!-- 当外部没有插槽传参时，可以在slot标签中设置任意的默认类容 -->
            <div>默认插槽内容</div>
     </slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 0 1em;
}

.title h4 {
  line-height: 2;
  margin: 0;
}

.container {
  border: 1px solid #ccc;
  padding: 0 1em;
}

.btn {
  /* 鼠标改成手的形状 */
  cursor: pointer;
}

img {
  width: 50%;
}
</style>