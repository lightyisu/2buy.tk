<template>
  <div class="main-content">
    <div class="recommend-title">
      <span>今日推荐</span>
      <el-divider direction="vertical"></el-divider>
      <span :style="{ color: 'gray' }">热门商品</span>
    </div>
    <div class="recommend-content">
      <el-row>
        <el-col v-for="(item, index) in recommendItems" :key="index" :span="4">
         <router-link to="/detail">
           <i class="item-cover"></i>
          <p class="item-title">{{ item.title }}</p>
          <p class="item-author">{{ item.author }}</p>
         </router-link>
         
          <el-button size="small" round>{{ item.categories }}</el-button>
        </el-col>
      </el-row>
      <i class="banner"></i>
    </div>

    <div class="recommend-title">
      <span>最受关注商品</span>
    </div>
    <div class="recommend-content">
      <el-row>
        <el-col v-for="(item, index) in hotItems" :key="index" :span="4">
          <div class="item-card">
            <i class="card-cover"></i>
            <p>{{ item.title }}</p>
            <p :style="{ fontSize: '8px', color: 'gray' }">{{ item.author }}</p>
            <p class="card-price">￥{{ item.price }}</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="recommend-footer">
      <p>Producted By <span style="color: #25b51d">2Buy</span>.tk In 2022</p>
      <p>Powered By Vue3 / ElementPlus</p>
      <p>In Dev Process</p>
    </div>
  </div>
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
  min-width: 1000px;
  margin: 0 auto;
  width: 70vw;
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
    margin-left: 40px;
    .item-author {
      font-size: 10px;
      margin: 6px 0px;
      color: rgb(163, 163, 163);
    }
    .item-title {
      margin: 8px 0px;
    }
    .item-card {
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
    margin: 40px 0;
    width: 100%;
    background: url("/banner.png");
    display: inline-block;
    background-position: left;
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
