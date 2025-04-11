import { ref, computed } from 'vue'
const zIndex = ref(0)

const useZIndex = (initialValue = 2000) => {
  const initialZindex = ref(initialValue)
  const currentZindex = computed(() => initialZindex.value + zIndex.value)

  const nextIndex = () => {
    zIndex.value++
    return currentZindex.value
  }
  return {
    currentZindex,
    nextIndex,
    initialZindex,
  }
}
export default useZIndex
