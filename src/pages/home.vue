<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.common-layout{
    .el-aside{
        background: lightblue;
        text-align: center;
        line-height: 100vh;
    }
    .el-header{
        background: red;
    }
    .el-footer{
        background: chartreuse;
    }
}
</style>
