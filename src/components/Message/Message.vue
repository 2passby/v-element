<script setup lang="ts">
import type { MessageProps } from './types'
import RenderVnode from '../common/RenderVnode'
import Icon from '../Icon/Icon.vue'
import { ref, onMounted, watch } from 'vue'
import { getLastInstance } from '@/components/Message/method'
const props = withDefaults(defineProps<MessageProps>(), {
  duration: 3000,
  type: 'info',
})
const prevInstance = getLastInstance()
console.log(prevInstance)
const visible = ref(false)
function startTimer() {
  if (props.duration === 0) return
  setTimeout(() => {
    visible.value = false
  }, props.duration)
}
onMounted(() => {
  visible.value = true
  //duration时间后，隐藏dom节点
  startTimer()
})
//监控visible 销毁节点
watch(visible, (newvalue) => {
  if (!newvalue) {
    props.onDestory()
  }
})
</script>
<template>
  <div
    class="vk-message"
    role="alert"
    v-show="visible"
    :class="{ [`vk-message--${type}`]: type, 'is-close': showClose }"
  >
    <div class="vk-message__content">
      <slot>
        <RenderVnode v-if="message" :v-node="message"></RenderVnode>
      </slot>
    </div>
    <div class="vk-message__close" v-if="showClose">
      <Icon icon="xmark" @click.stop="visible = false"></Icon>
    </div>
  </div>
</template>
<style>
.vk-message {
  width: max-content;
  position: fixed;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  border: 1px solid blue;
}
</style>
