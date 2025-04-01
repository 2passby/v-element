import type { Ref } from 'vue'
import { onMounted, onUnmounted } from 'vue'
//实现一个钩子函数，传入回调函数，判断当前点击的的位置是否包含在该dom元素下，如果在dom元素外面执行callback函数操作
const UseClickOutside = (
  RefElement: Ref<HTMLElement | undefined>,
  callback: (e: MouseEvent) => void,
) => {
  const handler = (e: MouseEvent) => {
    if (RefElement.value && e.target) {
      if (!RefElement.value.contains(e.target as HTMLElement)) {
        callback(e)
      }
    }
  }
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
}
export default UseClickOutside
