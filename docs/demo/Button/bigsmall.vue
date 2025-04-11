<script setup>
import Button from '@/components/Button/Button.vue'
</script>
<template>
  <div class="oneline">
    <Button type="primary" ref="Button_ref" size="large">primary</Button>
    <Button type="success" size="large">success</Button>
    <Button type="warning" size="large">warning</Button>
    <Button type="info" size="small">info</Button>
    <Button type="danger" size="small">danger</Button>
    <Button plain size="small">plain</Button>
    <Button disabled size="small">disabled</Button>
  </div>
</template>
