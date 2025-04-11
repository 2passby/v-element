<script setup>
import Button from '@/components/Button/Button.vue'
import Icon from '@/components/Icon/Icon.vue'
</script>
<template>
  <div class="oneline">
    <Button type="success" disabled>success</Button>
    <Button type="warning" disabled>warning</Button>
    <Button type="info" disabled>info</Button>
    <Button type="danger" disabled>danger</Button>
  </div>
</template>

<style scoped>
.oneline {
  display: flex;
  margin-bottom: 15px;
}
</style>
