<script setup>
import Switch from '@/components/Switch/Switch.vue'
import { ref } from 'vue'
const check1 = ref(true)
const check2 = ref(true)
const check3 = ref(true)
</script>

<template>
  <div>
    <div><span class="left">大按钮</span><Switch v-model="check1" size="large"></Switch></div>
    <div><span class="left">中按钮</span> <Switch v-model="check2"></Switch></div>
    <span class="left">小按钮</span> <Switch v-model="check3" size="small"></Switch>
  </div>
</template>
<style scoped>
.left {
  margin-right: 10px;
}
</style>
