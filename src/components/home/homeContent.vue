<template>
  <el-scrollbar>
    <div class="main-content">
      <div class="wrapper">
        <div class="recommend-title">
          <span>推荐商品</span>
          <move-btn
            @move-next="moveNext1"
            @move-previous="movePrevious1"
          ></move-btn>
        </div>
        <div class="recommend-content" ref="moveContent1">
          <div
            class="recommend-card"
            v-for="(item, index) in recommendItems"
            :key="index"
          >
            <router-link :to="'/item/' + item.id">
              <i class="item-cover" :style="bgImg(item.imgPath)"></i>

              <p class="item-title">{{ item.title }}</p>
              <p class="item-author">{{ item.author }}</p>
            </router-link>

            <el-button size="small" round>{{ item.categories }}</el-button>
          </div>
        </div>
      </div>

      <i class="banner"></i>
      <div class="wrapper">
        <div class="recommend-title">
          <span>最受关注商品</span>
           <move-btn
            @move-next="moveNext2"
            @move-previous="movePrevious2"
          ></move-btn>
        </div>

        <div class="recommend-content" ref="moveContent2">
          <div class="item-card" v-for="(item, index) in hotItems" :key="index">
            <i class="card-cover" :style="bgImg(item.imgPath)"></i>
            <p class="item-title">{{ item.title }}</p>
            <p :style="{ fontSize: '8px', color: 'gray' }">{{ item.author }}</p>
            <p class="card-price">￥{{ item.price }}</p>
          </div>
        </div>
      </div>

      <div class="recommend-footer">
        <el-divider></el-divider>
        <p>Producted By <span style="color: #25b51d">2Buy</span>.tk In 2022</p>
        <p>Powered By Vue3 / ElementPlus</p>
        <p>In Dev Process</p>
      </div>
    </div>
  </el-scrollbar>
</template>

<script setup>
import { ref, onMounted, resolveDirective } from "vue";
import { getRecommendItemList } from "../../api/home";
import moveBtn from "../utilCompon/move-btn.vue";
import MoveBtn from "../utilCompon/move-btn.vue";
onMounted(() => {
  getRecommendItemList().then((res) => {
    recommendItems.value = res.data.results;
    hotItems.value = res.data.results;
  });
});

let recommendItems = ref("");
let hotItems = ref("");
let moveContent1 = ref("");
let moveContent2=ref("")
let bgImg = (url) => {
  url = "url('" + encodeURI(url) + "')";

  return {
    background: url,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
};
let moveNext1 = () => {
  moveContent1.value.style.transform = "translateX(-100%)";
};
let movePrevious1 = () => {
  moveContent1.value.style.transform = "translateX(0px)";
};
let moveNext2 = () => {
  moveContent2.value.style.transform = "translateX(-100%)";
};
let movePrevious2 = () => {
  moveContent2.value.style.transform = "translateX(0px)";
};
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
    padding: 10px;
    height: 200px;
    width: 150px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: inline-block;
  }
  .wrapper {
    overflow: hidden;
    width: 80%;
    align-self: center;
  }
  .recommend-content {
    transition: transform 1s ease;
    align-self: center;

    display: flex;
    flex-wrap: nowrap;

    .recommend-card {
      text-align: center;
      flex-shrink: 0;
      width: 200px;
      margin-right: 30px;

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
      width: 300px;
      display: inline-block;
      flex-shrink: 0;
      .card-cover {
        height: 140px;
        width: 100%;
        display: inline-block;

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
      background-color: #f3f2f2;
      border-radius: 10px;
      padding: 13px;
    }
  }
  .banner {
    align-self: center;
    margin: 30px 0px;
    padding: 20px 0px;
    width: 90%;
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
    p {
      margin: 0;
    }
  }
}
</style>
