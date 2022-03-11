<template>
  <div class="content">
    <div class="main">
      <div class="img-wrapper">
          <img class="cover-img" :src="detail.imgPath"/>
      </div>
    
      <div class="desc">
        <h1>{{detail.title}}</h1>
        <div class="author">
          <i class="avatar"></i>
          <span class="author-name">{{detail.author}}</span>
        </div>
        <div class="categories">
          <span>{{detail.categories}}</span>
        </div>
        <div class="desc-detail">
          <p>
            {{detail.description}}
          </p>
          <p>发布于 {{detail.position}}</p>
          <p class="price">￥{{detail.price}}</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-info">
        <h1>共有10人想要</h1>
        <el-button color="#fff" class="want-btn" type="primary">加入想要</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted,ref} from 'vue';
import {getItemDetail} from '../api/home'
import {useRoute} from 'vue-router'
let route=useRoute();
let detail=ref('')

onMounted(()=>{
  getItemDetail({
    id:route.params.id
  }).then((res)=>{
    console.log(res);
    detail.value=res.data.results[0]
  })
})
</script>

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
.img-wrapper{
  width: 300px;
  .cover-img{
    width: auto;
    height: auto;
   max-height: 100%;
   max-width: 100%;
   border-radius: 10px;
  }
}

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
  .footer-info{
    padding: 60px;
  }
  h1 {
    color: #fff;
    font-size: 35px;
  }
  padding-right: 220px;
  display: flex;
  justify-content: flex-end;
  height: 100%;
 
  background-color: #25b51d;
  .want-btn{
    color: #25b51d;
    font-weight: bolder;
    font-size: 25px;
    padding: 25px;
  }
}
</style>
