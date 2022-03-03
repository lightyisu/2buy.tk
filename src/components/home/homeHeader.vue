<template>
  <div class="header">
    <el-row>
      <el-col :span="8">
        <el-input
          :style="{ margin: '10px' }"
          v-model="searchVal"
          placeholder="三只松鼠 80g礼包装 / ikbc键盘"
        >
          <template class="input-suffix" #append>
            <i class="search-icon"></i>
          </template>
        </el-input>
      </el-col>
      <el-col :span="12"></el-col>
      <el-col :span="4">
        <div class="header-right">
          <router-link to="/publish">
            <span>发布新闲置</span>
          </router-link>

          <span>登录</span>
          <i class="header-avatar"></i>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from "vue";
let searchVal = ref("");
</script>

<style scoped lang="scss">
:deep(.el-input-group__append) {
  background-color: #25b51d;
  color: #fff;
}
.header-right {
  float: right;
  padding: 10px;
  width: 300px;
  span {
    margin-left: 30px;
  }
  .header-avatar {
    margin-left: 20px;
    vertical-align: middle;
    display: inline-block;
    background-color: lightgray;
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }
}
</style>
