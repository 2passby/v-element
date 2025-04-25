<script setup>
import { createMessage } from '@/components/Message/method'
import Button from '@/components/Button/Button.vue'
import { h } from 'vue'
function show() {
  const instance = createMessage({
    message: h('em', 'welcome-message-component'),
    type: 'success',
    duration: 3000,
  })
}
</script>

<template>
  <Button type="primary" @click="show">点我弹窗</Button>
</template>
