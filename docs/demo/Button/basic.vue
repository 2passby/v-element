<script setup>
import Button from '@/components/Button/Button.vue'
import Icon from '@/components/Icon/Icon.vue'
</script>

<template>
  <div class="oneline">
    <Button type="primary" ref="Button_ref">primary</Button>
    <Button type="success">success</Button>
    <Button type="warning">warning</Button>
    <Button type="info">info</Button>
    <Button type="danger">danger</Button>
    <Button plain>plain</Button>
    <Button disabled>disabled</Button>
  </div>
  <div class="secondline">
    <Button type="success" plain>success</Button>
    <Button type="warning" plain>warning</Button>
    <Button type="info" plain>info</Button>
    <Button type="danger" plain>danger</Button>
    <Button plain>朴素按钮</Button>
    <Button disabled>禁用</Button>
  </div>
  <div class="thirdline">
    <Button type="success" round>success</Button>
    <Button type="warning" round>warning</Button>
    <Button type="info" round>info</Button>
    <Button type="danger" round>danger</Button>
    <Button round plain>朴素按钮</Button>
    <Button disabled>禁用</Button>
  </div>
  <div class="fourline">
    <Button circle> <Icon icon="star" /> </Button>
    <Button type="primary" circle> <Icon icon="star" /> </Button>
    <Button type="success" circle> <Icon icon="star" /> </Button>
    <Button type="warning" circle> <Icon icon="star" /> </Button>
    <Button type="danger" circle> <Icon icon="star" /> </Button>
    <Button type="info" circle> <Icon icon="star" /> </Button>
  </div>
</template>
<style scoped>
.oneline {
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  margin-bottom: 15px;
}
.secondline {
  display: flex;
  margin-bottom: 15px;
}
.thirdline {
  display: flex;
  margin-bottom: 15px;
}
.fourline {
  display: flex;
}
</style>
