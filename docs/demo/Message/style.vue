<template>
  <Button type="info" @click="show1">点我弹窗</Button>
  <Button type="success" @click="show2">点我弹窗</Button>
  <Button type="danger" @click="show3">点我弹窗</Button>
  <Button type="warning" @click="show4">点我弹窗</Button>
</template>

<script setup>
import { createMessage } from '@/components/Message/method'
import Button from '@/components/Button/Button.vue'

function show1() {
  const instance1 = createMessage({
    message: 'welcome-message-component',
    type: 'info',
    duration: 3000,
  })
}
function show2() {
  const instance2 = createMessage({
    message: 'welcome-message-component',
    type: 'success',
    duration: 3000,
  })
}
function show3() {
  const instance3 = createMessage({
    message: 'welcome-message-component',
    type: 'danger',
    duration: 3000,
  })
}
function show4() {
  const instance4 = createMessage({
    message: 'welcome-message-component',
    type: 'warning',
    duration: 3000,
  })
}
</script>

<style scoped></style>
