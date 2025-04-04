<script setup lang="ts">
import type { TooltipProps } from './types'
import type { TooltipsEmits } from './types'
import type { Instance } from '@popperjs/core'
import { createPopper } from '@popperjs/core'
import { ref, watch, reactive, onMounted, onUnmounted, computed } from 'vue'
import { defineOptions } from 'vue'
import UseClickOutside from '@/hooks/UseClickOutside'
import { debounce } from 'lodash-es'
defineOptions({
  name: 'vk-Tooltip',
})
const popperNode = ref<HTMLElement>()
const triggerNode = ref<HTMLElement>()
const popperContainerNode = ref<HTMLElement>()
UseClickOutside(popperContainerNode, () => {
  if (props.trigger === 'click' && isopen.value === true && !props.manual) {
    isopen.value = false
  }
})
const popperOptions = computed(() => {
  return {
    placement: props.placement,
    ...props.popperOptions,
  }
})
let isopen = ref(false)
//popper.js中的控制弹层的实例对象
let popperInstance: Instance | null = null
const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'bottom',
  trigger: 'hover',
  transtition: 'fade',
  opendelay: 0,
  closedelay: 0,
})
const emit = defineEmits<TooltipsEmits>()
let events: Record<string, any> = reactive({})
let outerevents: Record<string, any> = reactive({})
let opentime = 0
let closetime = 0
//点击触发弹层显示与隐藏
const togglePopper = () => {
  if (!isopen.value) {
    openDebounceFinal()
    emit('visible-change', false)
  } else {
    closeDebounceFinal()
    emit('visible-change', true)
  }
}

const open = () => {
  opentime++
  console.log(`open开始第${opentime}次数`)
  isopen.value = true
  emit('visible-change', true)
}
const close = () => {
  closetime++
  console.log(`close开始第${closetime}次数`)
  isopen.value = false
  emit('visible-change', false)
}
//在hover状态下，多次触发事件，需要用debounce进行防抖操作
const openDebounce = debounce(open, props.opendelay)
const closeDebounce = debounce(close, props.closedelay)

const openDebounceFinal = () => {
  closeDebounce.cancel()
  openDebounce()
}
const closeDebounceFinal = () => {
  openDebounce.cancel()
  closeDebounce()
}
const attachEvents = () => {
  if (props.trigger === 'click') {
    events['click'] = togglePopper
  } else if (props.trigger === 'hover') {
    outerevents['mouseenter'] = openDebounceFinal
    outerevents['mouseleave'] = closeDebounceFinal
  }
}
onMounted(() => {
  if (!props.manual) {
    attachEvents()
  }
})
watch(
  () => props.manual,
  (ismanual) => {
    if (ismanual) {
      events = {}
      outerevents = {}
    } else {
      attachEvents()
    }
  },
)
// 在dom更新后调用watch监听isopen的值
watch(
  isopen,
  (newvalue) => {
    if (newvalue) {
      if (popperNode.value && triggerNode.value) {
        popperInstance = createPopper(triggerNode.value, popperNode.value, popperOptions.value)
      } else {
        popperInstance?.destroy()
      }
    }
  },
  { flush: 'post' },
)
//监听trigger，改变后重新绑定事件，清空原来的
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
defineExpose({
  show: openDebounceFinal,
  hide: closeDebounceFinal,
})
onUnmounted(() => {
  popperInstance?.destroy()
})
</script>

<template>
  <div class="vk-tooltip" v-on="outerevents" ref="popperContainerNode">
    <div class="vk-tooltip__trigger" ref="triggerNode" v-on="events">
      <slot></slot>
    </div>
    <Transition :name="transtition">
      <div class="vk-tooltip__popper" ref="popperNode" v-if="isopen">
        <slot name="content">
          {{ content }}
        </slot>
        <div id="arrow" data-popper-arrow></div>
      </div>
    </Transition>
  </div>
</template>
<style scoped>
.vk-tooltip__trigger,
.vk-tooltip__popper {
  display: inline-block;
}
.vk-tooltip {
  display: inline-block;
}
</style>
