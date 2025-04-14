<script setup lang="ts">
import type { SelectEmits, SelectProps, SelectOptions } from './types'
import Tooltip from '../Tooltip/Tooltip.vue'
import Input from '../Input/Input.vue'
import { ref } from 'vue'
import type { TooltipInstance } from '../Tooltip/types'

defineOptions({
  name: 'Vkselect',
})
const props = defineProps<SelectProps>()
const emits = defineEmits<SelectEmits>()
const innerValue = ref('')
const tooltipRef = ref<TooltipInstance>()
const isDropdownShow = ref(false)
const controlDropdown = (show: boolean) => {
  if (show) {
    tooltipRef.value?.show()
  } else {
    tooltipRef.value?.hide()
  }
  isDropdownShow.value = show
  emits('visible-change', show)
}
const toggleDropdown = () => {
  if (props.disabled) return
  if (isDropdownShow.value) {
    // 如果是打开则点击后关闭
    controlDropdown(false)
  } else {
    controlDropdown(true)
  }
}
</script>

<template>
  <div class="vk-select" :class="{ 'is-disabled': disabled }" @click="toggleDropdown">
    <Tooltip placement="bottom-start" manual ref="tooltipRef">
      <Input v-model="innerValue" :disabled="disabled" :placeholder="placeholder"></Input>
      <template #content>
        <ul class="vk-select__menu">
          <template v-for="(item, index) in options" :key="index">
            <li
              class="vk-select__menu-item"
              :class="{ 'is-disabled': disabled }"
              :id="`select-item-${item.value}`"
            >
              {{ item.label }}
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>
