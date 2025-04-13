<script lang="ts" setup>
import type { SwitchEmits, SwitchProps } from './types'
import { ref, computed } from 'vue'
defineOptions({
  name: 'VkSwitch',
  inheritAttrs: false,
})
const props = defineProps<SwitchProps>()
const emits = defineEmits<SwitchEmits>()
const innerValue = ref(props.modelValue)

const checked = computed(() => innerValue.value)
</script>
<template>
  <div
    class="vk-switch"
    :class="{ [`vk-switch--${size}`]: size, 'is-disabled': disabled, 'is-checked': checked }"
  >
    <input
      type="checkbox"
      class="vk-switch__input"
      role="switch"
      :name="name"
      :disabled="disabled"
    />
    <div class="vk-switch__core">
      <div class="vk-switch__core-action"></div>
    </div>
  </div>
</template>
