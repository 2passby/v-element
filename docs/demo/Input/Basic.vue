<script setup>
import Input from '@/components/Input/Input.vue'
import { ref } from 'vue'
const val = ref('')
</script>

<template>
  <Input v-model="val"></Input>
  {{ val }}
</template>
