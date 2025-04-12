<script setup>
import Input from '@/components/Input/Input.vue'
import { ref } from 'vue'
const valinput1 = ref('123456789')
</script>

<template>
  <Input clearable v-model="valinput1"></Input>
</template>
