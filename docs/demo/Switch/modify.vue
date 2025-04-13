<script setup>
import Switch from '@/components/Switch/Switch.vue'
import { ref } from 'vue'
const check1 = ref('active')
</script>

<template>
  <div>
    <h4>当前传递v-model值为：{{ check1 === 'active' ? 'active' : 'unactive' }}</h4>
    <Switch v-model="check1" active-value="active" unactive-value="unactive" size="large"></Switch>
  </div>
</template>
<style scoped></style>
