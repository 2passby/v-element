<script setup>
import { createMessage } from '@/components/Message/method'
import Button from '@/components/Button/Button.vue'

function show() {
  const instance = createMessage({
    message: 'welcome-message-component',
    type: 'success',
    duration: 0,
    showClose: true,
  })
}
</script>

<template>
  <Button type="success" @click="show">点我弹窗</Button>
</template>
