<template>
    <div class="main-content">
        <div class="recommend-title">
        <span>今日推荐</span>
        <el-divider direction="vertical"></el-divider>
        <span :style="{color:'gray'}">热门商品</span>
        </div>
        <div class="recommend-content">
                <el-row >
                    <el-col v-for="(item,index) in items" :key="index" :span="4">
                        <i class="item-cover"></i>
                         <p>{{item}}</p> 
                          <el-button  size="small" round>书籍</el-button> 
                          <el-button  size="small" round>艺术</el-button> 

                    </el-col>
                </el-row>
                <i class="banner"></i> 
            <div class="recommend-title">
        <span>最受关注商品</span>
        </div>
        <el-row>
            <el-col v-for="(item,index) in hotItems" :key="index" :span="4">
                <div class="item-card">
                        <i class="card-cover"></i>
                        <p>{{item}}</p>
                        <p :style="{fontSize:'8px',color:'gray'}">大卫作品</p>
                        <p class="card-price">￥49</p>
                </div>
            </el-col>
        </el-row>
     </div>
     
    </div>
</template>



<script setup>
import {ref} from 'vue'
let items=ref(['傲慢与偏见','张宇30讲','爱的迫降','fromis_9','乃万-风的颜色','Netflix']);
let hotItems=ref(['傲慢与偏见','张宇30讲','爱的迫降','fromis_9','乃万-风的颜色','Netflix'])
</script>



<style scoped lang='scss'>
.main-content{
    .recommend-title{
        padding: 30px;
    }
    .item-cover{
        height: 200px;
        width: 150px;
        background-color: lightgray;
        display: inline-block;
       
    }
    .recommend-content{
       
        margin-left: 40px;
        .item-card{
            .card-cover{
                height: 140px;
                width: 14s0px;
                display: inline-block;
                background-color: #fff;

            }
            p{
                margin: 4px 0;
            }
            .card-price{
                margin: 20px 0;
                color: #E82A2A;
            }
            height: 270px;
            width: 150px;
            display: inline-block;
            background-color: #F5F5F5;
            border-radius: 10px;
            padding: 10px;
        }
    }
    .banner{
        margin: 40px 0;
        width: 1200px;
        background: url('/banner.png');
        display: inline-block;
        height: 120px;
        background-repeat: no-repeat;
        background-size: contain;
    }
}

</style>