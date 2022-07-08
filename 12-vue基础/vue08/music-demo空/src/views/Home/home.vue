<template>
  <div>
    <p class="title">推荐歌单</p>
    <van-row gutter="6">
      <van-col span="8" v-for="obj in relist" :key="obj.id">
        <van-image 
        width="100%" 
        height="3rem" 
        fit="cover" 
        :src="obj.picUrl" />
        <p class="song_name">{{ obj.name }}</p>
      </van-col>
    </van-row>
    <p class="title">最新的音乐</p>
   <van-cell 
   :title="obj.name" 
   :label="obj.song.artists[0].name + '-' + obj.name" 
   v-for="obj in songList" :key="obj.id">
      <template #right-icon>
        <van-icon name="play-circle-o" class="search-icon" size="0.6rem" />
      </template>
    </van-cell>
    
  </div>
</template>

<script>
// 目标
// 1. van-row和van-col来搭建外框布局
// 2. van-col类容（van-imge和p）
// 3. 调整间距和属性值
// 4. 调用封装的api/index.js推荐歌单api方法
// 5. 拿到数据报 保存到data里变量去上面循环标签
import {recommendMusicAPI, newMusicAPI} from '../../api/index.js'
export default {
   name: 'home-index',
  data () {
    return {
    relist: [], // 推荐歌单数据
    songList: [] // 最新音乐
  }
  },
 
  
  async created() {
  const res = await recommendMusicAPI({
    limit: 6
  })
  console.log(res);
  this.relist = res.data.result

  const res2 = await newMusicAPI({
    limit: 20
  })
  console.log(res2);
  this.songList = res2.data.result
}
}



</script>

<style scoped>
/* 标题 */
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}
/* 推荐歌单 - 歌名 */
.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}
.van-cell {
  border-bottom: 1px solid lightgray;
}
</style>