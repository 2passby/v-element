<script lang="ts" setup>
import type { Dropdownprops, DropdownEmits, DropdownInstance, MenuOptions } from './types'
import type { TooltipInstance } from '../Tooltip/types'
import { ref } from 'vue'
import RenderVnode from '@/components/common/RenderVnode'
import Tooltip from '../Tooltip/Tooltip.vue'
defineOptions({
  name: 'Vkdropdown',
})
const props = defineProps<Dropdownprops>()
const emits = defineEmits<DropdownEmits>()
const visibleChange = (e: boolean) => {
  emits('visible-change', e)
}
const itemClick = (e: MenuOptions) => {
  if (e.disabled) return
  emits('select', e)
}
const tooltipRef = ref<TooltipInstance>()

defineExpose({
  show: () => tooltipRef.value?.show(),
  hide: () => tooltipRef.value?.hide(),
})
</script>

<template>
  <div class="vk-dropdown">
    <Tooltip
      :trigger="trigger"
      :placement="placement"
      :popper-options="popperOptions"
      :opendelay="opendelay"
      :closedelay="closedelay"
      @visible-change="visibleChange"
      ref="tooltipRef"
    >
      <!-- 实现默认插槽内容透传 -->
      <template #default>
        <slot></slot>
      </template>
      <template #content>
        <ul class="vk-dropdown__menu">
          <template v-for="item in menuOptions" :key="item.key">
            <li v-if="item.divided" role="separator" class="divide-placeholder"></li>
            <li
              class="vk-dropdown__item"
              :class="{ 'is-disabled': item.disabled, 'is-divided': item.divided }"
              :id="`dropdown-item-${item.key}`"
              @click="itemClick(item)"
            >
              <!-- 渲染节点支持解析html语法，引入了renderVnode组件 -->
              <RenderVnode :vNode="item.label"></RenderVnode>
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>
