<script setup>
import { createMessage } from '@/components/Message/method'
import Button from '@/components/Button/Button.vue'

function show() {
  const instance = createMessage({
    message: '我只展示3s哦',
    type: 'success',
    duration: 3000,
  })
}
</script>

<template>
  <Button type="primary" @click="show">点我弹窗</Button>
</template>
