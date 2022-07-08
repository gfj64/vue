<template>
  <div>
    <span>全选:</span>
    <input type="checkbox" v-model="isAll" />
    <button>反选</button>
    <ul>
      <li v-for="(value, index) in arr" :key="index">
        <input type="checkbox" v-model="value.c" />
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

  computed: {
    isAll: {
        // 2.点击全选框 让所有小选框选中
        set (value) {
            this.arr.forEach(obj => {
                obj.c=value
            })
        },
        // 1.选择小选框 判断是否让全选框自动选中
        get () {
            // every 判断所有元素均满足条件
            let flag = this.arr.every(value => {
                return value.c
            })
            return flag
        }
    }
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