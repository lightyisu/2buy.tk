<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <div id="axpp">
    <p>dwad</p>
    <h1>2222</h1>
    <h2>22x</h2>
  </div>
  <h2>dwadwxx</h2>
  <p>dw2</p>
  <a href="#">hello</a>
</template>

<style scoped lang="scss">
$highlight-color:#F90;
#axpp{
  color: $highlight-color;
  p{
    &:hover{
      color: cadetblue;
    }
    color: red;
  }
  h2{
    color: blue;
  }
}
</style>
