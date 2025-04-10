<script setup lang="ts">
import type { MessageProps } from './types'
import RenderVnode from '../common/RenderVnode'
import Icon from '../Icon/Icon.vue'
import { ref, onMounted, watch, computed, nextTick } from 'vue'
import { getLastInstance, getLastBottomOffset } from '@/components/Message/method'
const props = withDefaults(defineProps<MessageProps>(), {
  duration: 3000,
  type: 'info',
  offset: 20,
})
const prevInstance = getLastInstance()
console.log(prevInstance)
const visible = ref(false)
const messageRef = ref<HTMLElement>()
//计算此时div高度
const height = ref(0)
//上个实例的底部高度
const lastOffset = computed(() => getLastBottomOffset(props.id))
//这个div使用的top偏移量
const topOffset = computed(() => props.offset + lastOffset.value)
//提供下一个元素所使用的底部高度，bottomOffset
const bottomOffset = computed(() => height.value + topOffset.value)
//提供top定位样式
const cssStyle = computed(() => ({
  top: topOffset.value + 'px',
  zIndex: props.zIndex,
}))
function startTimer() {
  if (props.duration === 0) return
  setTimeout(() => {
    visible.value = false
  }, props.duration)
}
onMounted(async () => {
  visible.value = true
  //duration时间后，隐藏dom节点
  startTimer()
  //节点更新后获取高度
  await nextTick()
  height.value = messageRef.value!.getBoundingClientRect().height
})
//监控visible 销毁节点
watch(visible, (newvalue) => {
  if (!newvalue) {
    props.onDestory()
  }
})
defineExpose({
  bottomOffset: bottomOffset,
  visible,
})
</script>
<template>
  <div
    class="vk-message"
    role="alert"
    v-show="visible"
    :class="{ [`vk-message--${type}`]: type, 'is-close': showClose }"
    ref="messageRef"
    :style="cssStyle"
  >
    <div class="vk-message__content">
      <slot>
        {{ offset }} --{{ topOffset }} --{{ height }} --{{ bottomOffset }}
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
