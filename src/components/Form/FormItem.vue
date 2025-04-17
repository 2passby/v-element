<script setup lang="ts">
import type { FormItemProps } from './types'
defineOptions({
  name: 'VkFormItem',
})
const props = defineProps<FormItemProps>()
</script>

<template>
  <div class="vk-form-item">
    <label for="" class="vk-form-item__label">
      <slot name="label" :label="label">
        {{ label }}
      </slot>
    </label>
    <div class="vk-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>
