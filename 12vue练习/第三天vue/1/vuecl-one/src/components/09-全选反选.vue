<template>
  <div>
    <span>全选:</span>
    <!-- 2. 用 v-model来关联全选状态  选中状态 
    让 isAll变量 与页面的状态关联到一起-->
    <input type="checkbox" v-model="isAll" />
    <button @click="btn">反选</button>
    <ul>
      <!-- v-for 来把数据循环到li标签上 -->
      <li v-for="(value, index) in arr" :key="index">
      <!--1. 由于所有的对象都有c属性，让对象的c属性关联上小选框的选中状态v-model="value.c利用v-model双向绑定 -->
        <input type="checkbox" v-model="value.c" />
        <!-- 把数据利用插值表达式 渲染到页面上 -->
        <span>{{value.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "猪八戒",
          c: false,
        },
        {
          name: "孙悟空",
          c: false,
        },
        {
          name: "唐僧",
          c: false,
        },
        {
          name: "白龙马",
          c: false,
        },
      ],
    };
  },
// 定义计算属性
  computed: {
    // 方法一
    isAll: {
        // 3.点击全选框 获取选中状态
        set (value) {
          //  统计小选框的状态 来影响全选状态
            this.arr.forEach(obj => {
                obj.c=value
            })
        },
        //  // 3.点击全选框 让所有小选框选中
        get () {
            // // every：查找数组里“不符合条件”的 ，直接原点返回false
            let flag = this.arr.every(value => {
                return value.c
            })
            return flag
        }
    },
  },

  methods: {
    btn () {
        // 让数组的c属性反转
        this.arr.forEach(value => {
            value.c = !value.c
        })
    }
  }

};
</script>