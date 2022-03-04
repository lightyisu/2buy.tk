<template>

    <div class="common-layout">
      <el-container class="layout-content">
        <el-main>
          <home-content />
        </el-main>
      </el-container>
    </div>

</template>

<script setup>
import HomeContent from "../components/home/homeContent.vue";
</script>

<style lang="scss" scoped>
.common-layout{
  height: 100%;
  .layout-content{
    height: 100%;
  }
  .el-main{
    padding: 0;
  }
}
</style>
