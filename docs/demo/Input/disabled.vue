<script setup>
import Input from '@/components/Input/Input.vue'
import { ref } from 'vue'
const valinput1 = ref('')
</script>

<template>
  <Input disabled v-model="valinput1"></Input>
</template>
