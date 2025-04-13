<script setup>
import Switch from '@/components/Switch/Switch.vue'
import { ref } from 'vue'
const check = ref(false)
</script>

<template>
  <Switch v-model="check" size="large"></Switch>
  <div>
    <span>当前状态{{ check ? '打开' : '关闭' }}</span>
  </div>
</template>
