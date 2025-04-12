<script setup>
import Input from '@/components/Input/Input.vue'
import { ref } from 'vue'
const val = ref('')
</script>

<template>
  <Input type="textarea" v-model="val" placeholder="我是textarea文本域"></Input>
</template>
