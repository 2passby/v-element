<script setup lang="ts">
import type { SelectEmits, SelectProps, SelectOptions, SelectStates, valuetype } from './types'
import Tooltip from '../Tooltip/Tooltip.vue'
import Input from '../Input/Input.vue'
import { ref, reactive, computed, watch } from 'vue'
import type { TooltipInstance } from '../Tooltip/types'
import type { inputInstance } from '../Input/types'
import RenderVnode from '../common/RenderVnode'
import Icon from '../Icon/Icon.vue'
import { isFunction, debounce } from 'lodash-es'

const findOption = (value: valuetype) => {
  const option = props.options.find((item) => item.value === value)
  return option
}
defineOptions({
  name: 'Vkselect',
})
const props = withDefaults(defineProps<SelectProps>(), {
  //这里直接赋值空数组会报错
  options: () => [],
})
const emits = defineEmits<SelectEmits>()
const initialOption = findOption(props.modelValue)

//标记当前选择的选项
const states = reactive<SelectStates>({
  inputValue: initialOption ? initialOption.label : '',
  selectOptions: initialOption,
  mousehover: false,
  loading: false,
  highlightIndex: -1,
})
const tooltipRef = ref<TooltipInstance>()
const isDropdownShow = ref(false)
const inputRef = ref<inputInstance>()
// 存储经过筛选的的options
const filteredOptions = ref(props.options)
//监听外部的options，更新内部的响应式对象filteredOptions
watch(
  () => props.options,
  (newOptions) => {
    filteredOptions.value = newOptions
  },
)
// 显示清除图标
const showClearIcon = computed(() => {
  return states.mousehover && states.inputValue && states.selectOptions && props.clearable
})
const filterPlaceholder = computed(() => {
  return props.filterable && states.selectOptions && isDropdownShow.value
    ? states.selectOptions.label
    : props.placeholder
})
const timeout = computed(() => (props.remote ? 300 : 0))

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
const generateFilterOption = async (searchValue: string) => {
  if (!props.filterable) return
  if (props.filterMethod && isFunction(props.filterMethod)) {
    filteredOptions.value = props.filterMethod(searchValue)
  } else if (props.remote && props.remoteMethod && isFunction(props.remoteMethod)) {
    states.loading = true
    filteredOptions.value = await props.remoteMethod(searchValue)

    states.loading = false
  } else {
    filteredOptions.value = props.options.filter((option) => option.label.includes(searchValue))
  }
  states.highlightIndex = -1
}
const onFilter = () => {
  generateFilterOption(states.inputValue)
}
//实现debounce防抖效果，防止多次发送无效的axios请求
const onFilterDebounce = debounce(onFilter, timeout.value)
const controlDropdown = (show: boolean) => {
  if (show) {
    if (props.filterable && states.selectOptions) {
      states.inputValue = ''
    }
    if (props.filterable) {
      generateFilterOption(states.inputValue)
    }
    tooltipRef.value?.show()
  } else {
    if (props.filterable) {
      //blur后回灌值
      states.inputValue = states.selectOptions ? states.selectOptions.label : ''
    }
    tooltipRef.value?.hide()
  }
  states.highlightIndex = -1
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
const onClear = () => {
  states.inputValue = ''
  states.selectOptions = undefined
  emits('change', '')
  emits('update:modelValue', '')
  emits('clear')
}
const handleKeyDown = (e: KeyboardEvent) => {
  switch (e.key) {
    case 'Enter':
      if (isDropdownShow.value) {
        if (states.highlightIndex !== -1 && filteredOptions.value[states.highlightIndex]) {
          itemSelect(filteredOptions.value[states.highlightIndex])
          // controlDropdown(false)
        } else {
          controlDropdown(false)
        }
      } else {
        controlDropdown(true)
      }
      break
    case 'Escape':
      controlDropdown(false)
      break
    case 'ArrowUp':
      // 禁止默认行为防止滚动条滚动
      e.preventDefault()
      console.log('arrow-up')
      if (filteredOptions.value.length > 0) {
        if (states.highlightIndex === -1 || states.highlightIndex === 0) {
          states.highlightIndex = filteredOptions.value.length - 1
        } else {
          states.highlightIndex--
        }
      }
      break
    case 'ArrowDown':
      // 禁止默认行为防止滚动条滚动
      e.preventDefault()
      console.log('arrow-down')
      if (filteredOptions.value.length > 0) {
        if (
          states.highlightIndex === filteredOptions.value.length - 1 ||
          states.highlightIndex === -1
        ) {
          states.highlightIndex = 0
        } else {
          states.highlightIndex++
        }
      }
      break
    default:
      break
  }
}
</script>

<template>
  <div
    class="vk-select"
    :class="{ 'is-disabled': disabled }"
    @click="toggleDropdown"
    @mouseenter="states.mousehover = true"
    @mouseleave="states.mousehover = false"
  >
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
        :placeholder="filterPlaceholder"
        :readonly="!filterable || !isDropdownShow"
        @input="onFilterDebounce"
        @keydown="handleKeyDown"
        ref="inputRef"
      >
        <template #suffix>
          <Icon
            icon="circle-xmark"
            v-if="showClearIcon"
            class="vk-input_clear"
            @click.prevent="onClear"
          ></Icon>
          <Icon
            v-else
            icon="angle-down"
            class="header-angle"
            :class="{ 'is-active': isDropdownShow }"
          ></Icon>
        </template>
      </Input>
      <template #content>
        <div class="vk-select__loading" v-if="states.loading">
          <Icon icon="spinner" spin></Icon>
        </div>
        <div class="vk-select__nodata" v-else-if="filterable && filteredOptions.length === 0">
          no-matching-data
        </div>
        <ul class="vk-select__menu" v-else>
          <template v-for="(item, index) in filteredOptions" :key="index">
            <!-- states存储当前选中的项，并且每个li利用state判断是否被选中 -->
            <li
              class="vk-select__menu-item"
              :class="{
                'is-disabled': item.disabled,
                'is-selected': states.selectOptions?.value === item.value,
                'is-highlighted': states.highlightIndex === index,
              }"
              :id="`select-item-${item.value}`"
              @click.stop="itemSelect(item)"
            >
              <!-- 根据传入的函数，返回一个vnode进行渲染 -->
              <RenderVnode :v-node="renderLabel ? renderLabel(item) : item.label"></RenderVnode>
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>
