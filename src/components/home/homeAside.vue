<template>
  <div class="layout-aside">
    <div class="logo-icon">
      <i></i>
      <div class="text-icon">
            <span :style="{color:'#25b51d',fontSize:'16px'}">2Buy</span>.tk
            <p>校园二手平台</p>
      </div>
    </div>
    <div class="options-wrapper">
            <ul>
                <router-link active-class="high-light" to="/">
                    <li >今日推荐</li>
                </router-link>
                <router-link  active-class="high-light" to="/categories">
                    <li>分类</li>
                </router-link>
                <li>收藏</li>
                <li>我的账号</li>
                <li>通知</li>
            </ul>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.layout-aside {
  
  .high-light{
    color: black;
  }
  a{
    text-decoration: none;
    color: rgb(143, 142, 142);  
  }
  .logo-icon {

    i {
      width: 40px;
      height: 40px;
      background-color: #25b51d;
      display: inline-block;
      border-radius: 13px;
    }
    p{
        margin: 0;
        
    }
    .text-icon{
        display: inline-block;
        vertical-align: top;
        padding: 4px;
    }
    font-size: 2px;
    padding: 20px;
  }
  .options-wrapper{
      margin-top: 100px;
      ul{
          list-style: none;
          padding: 0;
      }
      li{
          margin: 50px 0;
      }
  }
}
</style>
