<template>
  <div>
       <!-- 1. :class="{类名：布尔值}" -->
       <div :class="{red:bool}">动态class</div>
       <button @click="bool = !bool">切换red类</button>

       <!-- 2. :class="[带有类名字符串的变量]" -->
    <!-- 方法二;可以覆盖到方法一中的所有功能，同样还有动态改变类名的功能.以后常用的方法二 -->
       <div  :class="[className]">动态class2</div>
       <button @click="className = 'red'">改变className</button>

       <!-- 1. ：style="{css属性名：变量}" 
       在动态设置style属性时 一定要用驼峰命名-->
       <div :style="{backgroundColor: coloStr}">动态style属性</div>
       <button @click="colorStr = 'yellow'">改变style属性</button>

       <!-- 2. :style="[带有属性键值对的对象]" -->
       <!-- 方法二 可修改元素样式的灵活性更高， 推荐使用 -->
       <div :style="[styleObj]">动态style属性</div>
       <button @click="styleObj = {lineHeight: '20px'}">改变style属性</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        bool: true,
        classNme: 'yellow',
        colorStr: 'blue',
        styleObj: {
            color: 'white',
            backgroundColor: 'black'
        }
    };
  },
  methods: {
    // 在索引为1的位置插入元素

  },
};
</script>

<style scoped>
    .red {
        color:red
    }

    .yellow {
        color:green
    }
</style>