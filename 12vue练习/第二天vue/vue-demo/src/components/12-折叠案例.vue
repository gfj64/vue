<template>
  <div id="app">
    <h3>案例：折叠面板</h3>
    <div>
      <div class="title">
        <h4>芙蓉楼送辛渐</h4>
        <!-- 绑定点击事件 -->
        <span class="btn" @click="btn()">
          <!-- 根据isShow的值显示不同文字 -->
          {{txt}}
          <!-- {{isShow ? '收起' : '展开'}} -->
        </span>
      </div>
      <!-- v-show配合变量来控制标签隐藏出现 -->
      <div class="container" v-show="isShow">
        <p>寒雨连江夜入吴,</p>
        <p>平明送客楚山孤。</p>
        <p>洛阳亲友如相问，</p>
        <p>一片冰心在玉壶。</p>
      </div>
    </div>
  </div>
</template>
/* 
  1. 创建点击事件，并且给按钮绑定方法
  2. 设置按钮展开收起的文本
  3. 设置展开收起的事件逻辑
  4. 给对应的内容盒子一个v-show
*/
<script>
    export default {
        data() {
            return {
                isShow:true,
                // 当isShow为true时 收起，false时 展开
                txt: '收起'
            }
        },

        methods: {
            btn () {
                // 当点击时，翻转isShow的值
                this.isShow = !this.isShow;
                //通过当前的isShow的状态，修改文本内容
                if (this.isShow) {
                    this.txt = '收起';
                } else {
                    this.txt = '展开';
                }
            }
        }
            
    }
</script>

<style lang="less" scoped>
    body {
        background-color: #ccc;
        #app {
            width: 400px;
            margin: 20px auto;
            background-color: #fff;
            border: 4px solid blueviolet;
            border-radius: 1em;
            box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
            padding: 1em 2em 2em;
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
        }
    }
</style>