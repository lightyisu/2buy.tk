<template>
  <div class="move-btn">
    {{ moveCount }}/2
    <el-icon class="left-icon move-icon" color="#daddda" @click="movePrevious"
      ><arrow-left-bold
    /></el-icon>
    <el-icon class="right-icon move-icon" @click="moveNext"
      ><arrow-right-bold
    /></el-icon>
  </div>
</template>

<script setup>
import { ArrowRightBold, ArrowLeftBold } from "@element-plus/icons-vue";
import { ref,defineEmits} from "vue";
let moveCount = ref(1);
const emit=defineEmits(['movePrevious','moveNext'])
let movePrevious = () => {
  console.log("previous");
  if (moveCount.value != 1) {
    moveCount.value--;
  }
  emit('movePrevious');
};
let moveNext = () => {
 
  if (moveCount.value != 2) {
    moveCount.value++;
  }
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
