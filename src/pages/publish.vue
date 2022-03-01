<template>
  <div class="content">
    <h1>发布</h1>
    <el-divider class="divider"></el-divider>
    <el-form class="form" ref="formRef" :model="form">
      <el-form-item label="标题">
        <el-input v-model="form.title"> </el-input>
      </el-form-item>
      <el-form-item label="描述一下你的物品">
        <el-input v-model="form.description" :rows="2" type="textarea" />
      </el-form-item>
      <el-form-item label="地点">
        <el-select v-model="form.position" placeholder="选择您的地点">
          <el-option
            v-for="(item, index) in postion"
            :key="index"
            :label="item.name"
            :value="item.name"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="form.categories" placeholder="分类">
          <el-option
            v-for="(item, index) in categories"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>
      <p class="image-des">图片描述</p>
      <el-form-item>
        <div>
          <el-upload
            action="#"
            :auto-upload="false"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :onremove="handleRemove"
          >
            <el-icon><plus /></el-icon>
            <el-dialog v-model="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="" />
            </el-dialog>
          </el-upload>
        </div>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" @click="onSubmit">发布</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { Plus } from "@element-plus/icons-vue";
const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const handleRemove = (file, fileList) => {};
const handlePictureCardPreview = (file) => {
  dialogImageUrl.value = file.url;
  dialogVisible.value = true;
};
const form = reactive({
  title: "",
  description: "",
  position: "",
  categories: "",
});
const tag = ref("");
const postion = ref([
  { name: "安庆师范大学龙山校区" },
  { name: "安庆师范大学菱湖校区" },
]);
const categories = ref([
  "手机数码",
  "生活百货",
  "游戏装备",
  "服饰",
  "美妆",
  "运动户外",
  "技能服务",
  "房屋租赁",
  "周边",
]);
</script>

<style lang="scss" scoped>
.content {
  width: 50vw;
  padding: 70px 60px;
  h1 {
    color: #25b51d;
    font-size: 30px;
    margin: 0;
  }
  .divider {
    margin: 0;
    width: 60px;
    border-width: 5px;
    border-color: #25b51d;
  }
  .form {
    margin-top: 40px;
    .image-des {
      color: #25b51d;
      font-size: 18px;
    }
  }
}
</style>
