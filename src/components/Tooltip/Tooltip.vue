<script setup lang="ts">
import type { TooltipProps } from './types'
import type { TooltipsEmits } from './types'
import type { Instance } from '@popperjs/core'
import { createPopper } from '@popperjs/core'
import { ref, watch, reactive, onMounted } from 'vue'
import { defineOptions } from 'vue'
defineOptions({
  name: 'vk-Tooltip',
})
const popperNode = ref<HTMLElement>()
const triggerNode = ref<HTMLElement>()
let isopen = ref(false)
//popper.js中的控制弹层的实例对象
let popperInstance: Instance | null = null
const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'bottom',
})
const emit = defineEmits<TooltipsEmits>()
let events: Record<string, any> = reactive({})
let outerevents: Record<string, any> = reactive({})
//点击触发弹层显示与隐藏
const togglePopper = () => {
  isopen.value = !isopen.value
  emit('visible-change', isopen.value)
}
const open = () => {
  isopen.value = true
  emit('visible-change', true)
}
const close = () => {
  isopen.value = false
  emit('visible-change', false)
}
const attachEvents = () => {
  if (props.trigger === 'click') {
    events['click'] = togglePopper
  } else if (props.trigger === 'hover') {
    outerevents['mouseenter'] = open
    outerevents['mouseleave'] = close
  }
}
onMounted(() => {
  attachEvents()
})
// 在dom更新后调用watch监听isopen的值
watch(
  isopen,
  (newvalue) => {
    if (newvalue) {
      if (popperNode.value && triggerNode.value) {
        popperInstance = createPopper(triggerNode.value, popperNode.value, {
          placement: props.placement,
        })
      } else {
        popperInstance?.destroy()
      }
    }
  },
  { flush: 'post' },
)
watch(
  () => props.trigger,
  (newvalue, oldvalue) => {
    if (newvalue !== oldvalue) {
      events = {}
      outerevents = {}
      //重新获取需要绑定的数据类型
      attachEvents()
    }
  },
)
</script>

<template>
  <div class="vk-tooltip" v-on="outerevents">
    <div class="vk-tooltip__trigger" ref="triggerNode" v-on="events">
      <slot></slot>
    </div>
    <div class="vk-tooltip__popper" ref="popperNode" v-if="isopen">
      <slot name="content">
        {{ content }}
      </slot>
    </div>
  </div>
</template>
<style scoped>
.vk-tooltip__trigger,
.vk-tooltip__popper {
  display: inline-block;
}
</style>
