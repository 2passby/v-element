<script lang="ts" setup>
import type { SwitchEmits, SwitchProps } from './types'
import { ref, computed, watch, onMounted } from 'vue'
defineOptions({
  name: 'VkSwitch',
  inheritAttrs: false,
})
const props = withDefaults(defineProps<SwitchProps>(), {
  activeValue: true,
  inactiveValue: false,
})
const emits = defineEmits<SwitchEmits>()
const innerValue = ref(props.modelValue)
const input = ref<HTMLInputElement | undefined>()
const checked = computed(() => innerValue.value === props.activeValue)
const switchValue = () => {
  if (props.disabled) return
  const val = checked.value ? props.inactiveValue : props.activeValue
  innerValue.value = val
  emits('change', val)
  emits('update:modelValue', val)
}
onMounted(() => {
  input.value!.checked = checked.value
})
watch(
  () => checked.value,
  (newvalue) => {
    input.value!.checked = newvalue
  },
)
watch(
  () => props.modelValue,
  (newvalue) => {
    innerValue.value = newvalue
  },
)
</script>
<template>
  <div
    class="vk-switch"
    :class="{ [`vk-switch--${size}`]: size, 'is-disabled': disabled, 'is-checked': checked }"
    @click="switchValue"
  >
    <!-- 支持按下tab键盘实现切换，对盲人友好 -->
    <input
      type="checkbox"
      class="vk-switch__input"
      role="switch"
      ref="input"
      :name="name"
      :disabled="disabled"
      @keydown.enter="switchValue"
    />
    <div class="vk-switch__core">
      <div class="vk-switch__core-inner">
        <span v-if="activeText || inactiveText" class="vk-switch__core-inner-text">
          {{ checked ? activeText : inactiveText }}
        </span>
      </div>
      <div class="vk-switch__core-action"></div>
    </div>
  </div>
</template>
