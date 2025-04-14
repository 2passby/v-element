<script setup lang="ts">
import type { SelectEmits, SelectProps, SelectOptions, SelectStates } from './types'
import Tooltip from '../Tooltip/Tooltip.vue'
import Input from '../Input/Input.vue'
import { ref, reactive } from 'vue'
import type { TooltipInstance } from '../Tooltip/types'
import type { inputInstance } from '../Input/types'
import Icon from '../Icon/Icon.vue'
const findOption = (value: string) => {
  const option = props.options.find((item) => (item.value = value))
  return option
}
defineOptions({
  name: 'Vkselect',
})
const props = defineProps<SelectProps>()
const emits = defineEmits<SelectEmits>()
const initialOption = findOption(props.modelValue)
const innerValue = ref(initialOption ? initialOption.label : '')
const states = reactive<SelectStates>({
  inputValue: initialOption ? initialOption.label : '',
  selectOptions: initialOption,
})
const tooltipRef = ref<TooltipInstance>()
const isDropdownShow = ref(false)
const inputRef = ref<inputInstance>()
const popperOptions: any = {
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 9],
      },
    },
    {
      name: 'sameWidth',
      enabled: true,
      fn: ({ state }: { state: any }) => {
        state.styles.popper.width = `${state.rects.reference.width}px`
      },
      phase: 'beforeWrite',
      requires: ['computeStyles'],
    },
  ],
}
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
  console.log('我触发了')
  if (isDropdownShow.value) {
    // 如果是打开则点击后关闭
    controlDropdown(false)
  } else {
    controlDropdown(true)
  }
}
const itemSelect = (e: SelectOptions) => {
  if (e.disabled) return
  //选择后改变input值为新选中的值
  states.inputValue = e.label
  states.selectOptions = e
  emits('change', e.value)
  emits('update:modelValue', e.value)
  //选择后关闭选项页
  controlDropdown(false)

  //继续聚焦于input
  inputRef.value?.ref.focus()
}
</script>

<template>
  <div class="vk-select" :class="{ 'is-disabled': disabled }" @click="toggleDropdown">
    <Tooltip
      placement="bottom-start"
      manual
      ref="tooltipRef"
      :popper-options="popperOptions"
      @click-outside="controlDropdown(false)"
    >
      <Input
        v-model="states.inputValue"
        :disabled="disabled"
        :placeholder="placeholder"
        readonly
        ref="inputRef"
      >
        <template #suffix>
          <Icon
            icon="angle-down"
            class="header-angle"
            :class="{ 'is-active': isDropdownShow }"
          ></Icon>
        </template>
      </Input>
      <template #content>
        <ul class="vk-select__menu">
          <template v-for="(item, index) in options" :key="index">
            <li
              class="vk-select__menu-item"
              :class="{
                'is-disabled': item.disabled,
                'is-selected': states.selectOptions?.value === item.value,
              }"
              :id="`select-item-${item.value}`"
              @click.stop="itemSelect(item)"
            >
              {{ item.label }}
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>
