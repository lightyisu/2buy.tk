<template>
  <div class="content">
    <div class="main">
      <i class="cover"></i>
      <div class="desc">
        <h1>坚果R2一台</h1>
        <div class="author">
          <i class="avatar"></i>
          <span class="author-name">INVU</span>
        </div>
        <div class="categories">
          <span>手机数码</span>
        </div>
        <div class="desc-detail">
          <p>
            8+256GB 全新一台坚果手机 买了三个月 有盒子 成色如图 手机无暗病
            高通骁龙865处理器
          </p>
          <p>发布于 安庆师范大学龙山校区</p>
          <p class="price">￥2600</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div>
        <h1>共有10人想要</h1>
        <el-button color="#fff" class="want-btn" type="primary">加入想要</el-button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.content {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main {
  padding: 40px 0px;
  display: flex;
  justify-content: center;
}

.categories {
  span {
    color: rgb(41, 41, 41);
    border: 2px solid rgb(107, 107, 107);
    padding: 8px;
    border-radius: 14px;
  }
}
.desc {
  font-size: 16px;
  width: 40%;
  h1 {
    color: #25b51d;
    font-size: 26px;
    display: inline-block;
  }
  .author {
    display: inline-block;
    margin-left: 40px;
  }
  .author-name {
    vertical-align: super;
    margin: 0 10px;
  }
  .avatar {
    vertical-align: bottom;
    width: 30px;
    height: 30px;
    border-radius: 40px;
    background-color: lightgray;
    display: inline-block;
  }
  .desc-detail {
    margin: 40px 0px;
    .price {
      color: #e82a2a;
      font-size: 30px;
      margin: 0;
    }
  }
  padding-left: 40px;
  display: inline-block;
  vertical-align: top;
}
.cover {
  display: inline-block;
  border-radius: 10px;
  height: 250px;
  width: 250px;
  margin: 30px 0px;
  background-color: lightgray;
}
.footer {
  h1 {
    color: #fff;
    font-size: 45px;
  }
  padding-right: 320px;
  display: flex;
  justify-content: flex-end;
  height: 100%;
  margin-top: 100px;
  background-color: #25b51d;
  .want-btn{
    color: #25b51d;
    font-weight: bolder;
    font-size: 25px;
    padding: 25px;
  }
}
</style>
