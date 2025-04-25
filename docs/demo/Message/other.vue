<script setup>
import { createMessage } from '@/components/Message/method'
import Button from '@/components/Button/Button.vue'

function show() {
  const instance = createMessage({
    message: 'welcome-message-component',
    type: 'danger',
    duration: 3000,
    showClose: true,
  })
}
</script>

<template>
  <Button type="danger" @click="show">点我弹窗</Button>
</template>
