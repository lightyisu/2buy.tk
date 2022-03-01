<template>
  <el-scrollbar>
    <div class="categories-content">
      <p class="title">分类</p>
      <el-row>
        <el-col v-for="(item, index) in categoriesItem" :key="index" :span="4">
          <el-card :style="{ width: '70%' }" :body-style="{ padding: '0px' }">
            <i class="ctg-cover"></i>
          </el-card>
          <div class="details">
            <p>{{ item.name }}</p>
            <p>
              共<span class="highlight">{{ item.amount }}</span
              >个在售商品
            </p>
          </div>
        </el-col>
      </el-row>
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
  padding: 10px 80px;
  .el-col-4 {
    margin: 20px 40px;
  }
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
}
</style>
