<script setup>
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Button from '@/components/Button/Button.vue'
</script>
<template>
  <Tooltip content="弹层被展示了" placement="top" class="tooltip" trigger="click">
    <h3><Button>hover展示-上</Button></h3>
  </Tooltip>
  <Tooltip content="弹层被展示了" placement="left" class="tooltip" trigger="click">
    <h3><Button>hover展示-左</Button></h3>
  </Tooltip>
  <Tooltip content="弹层被展示了" placement="bottom" class="tooltip" trigger="click">
    <h3><Button>hover展示-下</Button></h3>
  </Tooltip>
  <Tooltip content="弹层被展示了" placement="right" class="tooltip" trigger="click">
    <h3><Button>hover展示-右</Button></h3>
  </Tooltip>
</template>
<style scoped>
.tooltip {
  margin-right: 20px;
}
</style>
