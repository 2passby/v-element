import { onBeforeUnmount, onMounted, onUnmounted, isRef, watch, unref } from 'vue'
import type { Ref } from 'vue'
export default function useEventListener(
  target: EventTarget | Ref<EventTarget | null>,
  event: string,
  handler: (e: Event) => any,
) {
  //判断是响应式对象吗
  if (isRef(target)) {
    watch(target, (newvalue, oldvalue) => {
      oldvalue?.removeEventListener(event, handler)
      newvalue?.addEventListener(event, handler)
    })
  } else {
    onMounted(() => {
      target.addEventListener(event, handler)
    })
  }

  onBeforeUnmount(() => {
    //unref是辅助函数，获取ref or reactive对应的值，如果不是ref / reactive 直接返回值
    unref(target)?.removeEventListener(event, handler)
  })
}
