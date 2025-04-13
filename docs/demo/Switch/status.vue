<script setup>
import Switch from '@/components/Switch/Switch.vue'
import { ref } from 'vue'
const check1 = ref(true)
</script>

<template>
  <div>
    <Switch v-model="check1" active-text="on" inactive-text="off" size="large"></Switch>
  </div>
</template>
<style scoped></style>
