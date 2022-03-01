<template>
  <el-scrollbar>
    <div class="common-layout">
      <el-container class="layout-content">
        <el-main>
          <home-content />
        </el-main>
      </el-container>
    </div>
  </el-scrollbar>
</template>

<script setup>
import HomeContent from "../components/home/homeContent.vue";
</script>

<style lang="scss" scoped></style>
