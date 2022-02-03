<template>
  <div class="common-layout">
    <el-container :style="{ height: '100%' }">
      <el-aside width="200px"> <home-aside /></el-aside>
      <el-container class="layout-content">
        <el-header>
          <home-header />
        </el-header>
        <el-scrollbar>
        <el-main>
          <home-content />
        </el-main>
        </el-scrollbar>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import HomeAside from "../components/home/homeAside.vue";
import HomeHeader from "../components/home/homeHeader.vue";
import HomeContent from "../components/home/homeContent.vue";
</script>

<style lang="scss" scoped>
.common-layout {
  height: 100%;
  .el-aside {
    background: #f7f7f7;
    text-align: center;
    height: 100%;
  }
  .el-header {
    border-bottom: 1.2px solid rgb(230, 230, 230);
  }
  .layout-content {
    height: 100%;
    overflow: hidden;
  }
  .el-footer {
    background: chartreuse;
  }
}
</style>
