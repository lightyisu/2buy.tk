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
                <li>今日推荐</li>
                <li>分类</li>
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
