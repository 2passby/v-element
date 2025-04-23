<script setup>
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Button from '@/components/Button/Button.vue'
import { ref } from 'vue'
import { bottom } from '@popperjs/core'
const TooltipRef = ref()
const show = () => {
  TooltipRef.value.show()
}
const hide = () => {
  TooltipRef.value.hide()
}
</script>
<template>
  <div>
    <Tooltip
      content="弹层被展示了"
      placement="top"
      class="tooltip"
      manual
      ref="TooltipRef"
      :style="{ marginBottom: '30px' }"
    >
      <h3><Button>hover展示-上</Button></h3>
    </Tooltip>
  </div>
  <Button type="primary" @click="show">点我展示</Button>
  <Button type="danger" @click="hide">点我关闭</Button>
</template>
<style scoped>
.tooltip {
  margin-right: 20px;
}
</style>
