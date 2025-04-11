<script setup lang="ts">
import type { MessageProps } from './types'
import useEventListener from '@/hooks/UseEventListener'
import RenderVnode from '../common/RenderVnode'
import Icon from '../Icon/Icon.vue'
import { ref, onMounted, watch, computed, nextTick } from 'vue'
import { getLastInstance, getLastBottomOffset } from '@/components/Message/method'
const props = withDefaults(defineProps<MessageProps>(), {
  duration: 3000,
  type: 'info',
  offset: 20,
  transitionName: 'fade-up',
})
const prevInstance = getLastInstance()
// console.log(prevInstance)
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
let timer: any = null
function startTimer() {
  if (props.duration === 0) return
  timer = setTimeout(() => {
    visible.value = false
  }, props.duration)
}
function closeTimer() {
  // console.log('我在努力停止定时了')
  clearTimeout(timer)
}
onMounted(() => {
  visible.value = true
  //duration时间后，隐藏dom节点
  startTimer()
  //节点更新后获取高度
})
const handler = (e: Event) => {
  const event = e as KeyboardEvent
  if (event.code === 'Escape') visible.value = false
}
useEventListener(document, 'keydown', handler)
//监控visible 销毁节点,为了实现动画，将height计算和销毁节点放在transition组件的钩子上
// watch(visible, (newvalue) => {
//   if (!newvalue) {
//     props.onDestory()
//   }
// })
const destoryComponent = () => {
  props.onDestory()
}
const updateHeight = async () => {
  height.value = messageRef.value!.getBoundingClientRect().height
}
defineExpose({
  bottomOffset: bottomOffset,
  visible,
})
</script>
<template>
  <Transition :name="transitionName" @enter="updateHeight" @after-leave="destoryComponent">
    <div
      class="vk-message"
      role="alert"
      v-show="visible"
      :class="{ [`vk-message--${type}`]: type, 'is-close': showClose }"
      ref="messageRef"
      :style="cssStyle"
      @mouseenter="closeTimer"
      @mouseleave="startTimer"
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
  </Transition>
</template>
<style></style>
