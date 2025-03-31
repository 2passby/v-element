<script setup lang="ts">
import type { NameType } from './types'
import { ref, provide } from 'vue'
import { CollapseContextKey } from './types'
import type { CollapseProps, CollaspeEmits } from './types'
import { watch } from 'vue'

defineOptions({
  name: 'vk-Collapse',
})
const props = defineProps<CollapseProps>()
//监听传入属性的变化，动态更新active数组
watch(
  () => props.modelValue,
  () => {
    activeNames.value = props.modelValue
  },
)
const emit = defineEmits<CollaspeEmits>()
//activename是一个存放nametype类型的数组
const activeNames = ref<NameType[]>(props.modelValue)
if (props.accordion && props.modelValue.length > 1) {
  console.warn('开启手风琴必须要求只传入一个参数')
}
//处理每个collapse 展开与折叠
const handelItemClick = (item: NameType) => {
  //判断是否开启了手风琴模式
  if (props.accordion) {
    // 判断activenames中仅有得一项是不是对应的item
    activeNames.value = [activeNames.value[0] === item ? ' ' : item]
  } else {
    const index = activeNames.value.indexOf(item)
    if (index > -1) {
      activeNames.value.splice(index, 1)
    } else {
      activeNames.value.push(item)
    }
  }
  emit('update:modelValue', activeNames.value)
  emit('change', activeNames.value)
}

//provide

provide(CollapseContextKey, {
  activeNames,
  handelItemClick,
})
</script>

<template>
  <!-- 父组件展示子组件collapse-item中的内容 -->
  <div class="vk-collapse">
    <slot></slot>
  </div>
</template>

<style></style>
