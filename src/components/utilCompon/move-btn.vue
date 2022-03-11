<template>
  <div class="move-btn">
    
    <el-icon class="left-icon move-icon" :style="{color:count==0?'#daddda':''}" @click="movePrevious"
      ><arrow-left-bold
    /></el-icon>
    <el-icon class="right-icon move-icon" @click="moveNext"
      ><arrow-right-bold
    /></el-icon>
 
  </div>
</template>

<script setup>
import { ArrowRightBold, ArrowLeftBold } from "@element-plus/icons-vue";
import { ref,defineEmits,defineProps} from "vue";
const props=defineProps(['count'])
const emit=defineEmits(['movePrevious','moveNext'])
let movePrevious = () => {
  console.log("previous");

  emit('movePrevious');
};
let moveNext = () => {

  emit('moveNext')
};
</script>

<style lang="scss" scoped>
.move-btn {
  float: right;

  .move-icon {
    cursor: pointer;
    border: 2px solid rgb(235, 235, 235);
    border-radius: 20px;
    margin: 0px 6px;
    padding: 3px;
  }
}
</style>
