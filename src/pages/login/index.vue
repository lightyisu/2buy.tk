<template>
  <div class="main">
    <div class="login-banner"></div>
    <div class="login-form">
      <div class="content">
        账号
        <br/>
        <el-input v-model="account" />
        <br/>
         密码
         <br/>
        <el-input  type="password" show-password v-model="password" />
        <router-link to="/">
               <el-button type="primary">登录</el-button>
        </router-link>
     
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
let account = ref("");
let password=ref("")
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  width: 100%;
  height: 100%;
}
.login-banner {
  display: inline-block;
  background: url("/login-banner.png");
  width: 70%;
  min-width: 800px;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.login-form {
    margin: 0 auto;
  display: flex;

  flex-direction: column;
  justify-content: center;
  .el-input{
      
      margin: 20px 0px;
  }
  .content{
      justify-content: center;
  }
}
</style>
