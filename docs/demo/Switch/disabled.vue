<script setup>
import Switch from '@/components/Switch/Switch.vue'
import { ref } from 'vue'
const check1 = ref(true)
const check2 = ref(false)
</script>

<template>
  <div>
    <Switch v-model="check1" disabled size="large"></Switch>
  </div>
  <Switch v-model="check2" disabled size="large"></Switch>
</template>
<style scoped></style>
