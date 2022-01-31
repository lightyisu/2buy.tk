<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px"> <home-aside /></el-aside>
      <el-container>
        <el-header>
          <home-header />
        </el-header>
        <el-main>
          <home-content />
        </el-main>
        
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
  .el-aside {
    background: #f7f7f7;
    text-align: center;
    height: 100vh;
  }
  .el-header {
    border-bottom: 1.2px solid rgb(230, 230, 230);
  }
  .el-footer {
    background: chartreuse;
  }
}
</style>
