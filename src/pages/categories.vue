<template>
  <el-scrollbar>
    <div class="categories-content">
      <p class="title">分类</p>
      <div class="cardItem" v-for="(item,index) in categoriesItem" :key="index">
        <el-card :body-style="{ padding: '0px' }">
          <i class="ctg-cover"></i>
        </el-card>
        <div class="details">
          <p>{{ item.name }}</p>
          <p>
            共<span class="highlight">{{ item.amount }}</span
            >个在售商品
          </p>
        </div>
      </div>
    </div>
  </el-scrollbar>
</template>

<script setup>
import { ref } from "vue";
let categoriesItem = ref([
  { name: "电子产品", amount: 20 },
  { name: "电子产品", amount: 20 },
  { name: "电子产品", amount: 20 },
  { name: "电子产品", amount: 20 },
  { name: "电子产品", amount: 20 },
  { name: "电子产品", amount: 20 },
  { name: "电子产品", amount: 20 },
  { name: "电子产品", amount: 20 },
  { name: "电子产品", amount: 20 },
  { name: "电子产品", amount: 20 },
  { name: "电子产品", amount: 20 },
  { name: "电子产品", amount: 20 },
]);
</script>

<style lang="scss" scoped>
.categories-content {
  width: 60vw;
  margin: 0 auto;
  padding: 10px 80px;

  .details {
    margin-top: 12px;
    font-size: 13px;
    p {
      margin: 0;
    }
    .highlight {
      color: #e82a2a;
    }
  }
  .title {
    font-size: 20px;
  }
  .ctg-cover {
    background-color: rgb(209, 209, 209);
    display: inline-block;
    height: 240px;
    width: 100%;
  }
  .el-card__body {
    width: 100px;
    height: 240px;
  }
  .cardItem{
    width: 200px;
    margin: 10px 30px;
    display: inline-block;
  }
}
</style>
