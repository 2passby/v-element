<script setup>
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Button from '@/components/Button/Button.vue'
</script>
<template>
  <Tooltip content="我显示了" opendelay="1000" closedelay="1000" trigger="click" placement="right">
    <Button type="primary">点我-1s后显示</Button>
  </Tooltip>
  <div>-</div>
  <Tooltip content="我显示了" opendelay="1000" closedelay="1000" placement="right">
    <Button type="primary">hover-1s后显示</Button>
  </Tooltip>
</template>
