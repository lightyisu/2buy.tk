<template>
  <el-scrollbar>
  <div class="main-content">
     <div class="recommend-title">
      <span>推荐商品</span>
    </div>
   <div class="recommend-content">
   
      <div
        class="recommend-card"
        v-for="(item, index) in recommendItems"
        :key="index"
      >
        <router-link to="/detail">
          <i class="item-cover"></i>
          <p class="item-title">{{ item.title }}</p>
          <p class="item-author">{{ item.author }}</p>
        </router-link>

        <el-button size="small" round>{{ item.categories }}</el-button>
      </div>
    </div>
    <i class="banner"></i>
    <div class="recommend-title">
      <span>最受关注商品</span>
    </div>
    <div class="recommend-content">
      <div class="item-card" v-for="(item, index) in hotItems" :key="index">
        <i class="card-cover"></i>
        <p class="item-title">{{ item.title }}</p>
        <p :style="{ fontSize: '8px', color: 'gray' }">{{ item.author }}</p>
        <p class="card-price">￥{{ item.price }}</p>
      </div>
    </div>
    <div class="recommend-footer">
      <p>Producted By <span style="color: #25b51d">2Buy</span>.tk In 2022</p>
      <p>Powered By Vue3 / ElementPlus</p>
      <p>In Dev Process</p>
    </div>
  </div>
  </el-scrollbar>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getRecommendItemList } from "../../api/home";
onMounted(() => {
  getRecommendItemList().then((res) => {
    recommendItems.value = res.data.results;
    hotItems.value = res.data.results;
  });
});
let recommendItems = ref("");
let hotItems = ref("");
</script>

<style scoped lang="scss">
.main-content {
  display: flex;
  flex-direction: column;
  
  width: 100%;
  height: 100%;
  
  .recommend-title {
    padding: 30px;
  }
  .item-cover {
    height: 200px;
    width: 150px;
    background: url("../../assets/cover.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: inline-block;
  }
  .recommend-content {
    align-self: center;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    
   
    .recommend-card {
        flex-shrink: 0;
        width: 200px;
     
      display: inline-block;
    }
    .item-author {
      font-size: 10px;
      margin: 6px 0px;
      color: rgb(163, 163, 163);
    }
    .item-title {
      margin: 8px 0px;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .item-card {
        margin: 20px 30px;
       .card-cover {
        height: 140px;
        width: 100%;
        display: inline-block;
        background: url("../../assets/cover.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      p {
        margin: 4px 0;
      }
      .card-price {
        margin: 20px 0;
        color: #e82a2a;
      }
      height: 270px;
      width: 150px;
      display: inline-block;
      background-color: #f5f5f5;
      border-radius: 10px;
      padding: 10px;
    }
  }
  .banner {
    align-self: center;
    margin: 30px 0px;
    padding: 20px 0px;
    width: 80%;
    background: url("/banner.png");
    display: inline-block;
    background-position: center;
    height: 120px;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .recommend-footer {
    font-size: 14px;
    text-align: left;
    padding: 30px 40px;
    color: rgb(189, 184, 184);
    margin-top: 120px;
    border-top: 1px solid rgb(223, 219, 219);
    p {
      margin: 0;
    }
  }
}
</style>
