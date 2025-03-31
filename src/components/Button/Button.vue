<script setup lang="ts">
import type { ButtonProps } from './types'
import Icon from '../Icon/Icon.vue'
import { ref } from 'vue'
let _ref = ref<HTMLButtonElement>()
defineOptions({
  name: 'vk-Button',
})
withDefaults(defineProps<ButtonProps>(), {
  //提供props默认值
  nativeType: 'button',
})
defineExpose({
  //暴漏出去的名字：对应属性
  ref: _ref,
})
</script>

<template>
  <button
    class="vk-button"
    ref="_ref"
    :class="{
      [`vk-button-${type}`]: type,
      [`vk-button-${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    :disabled="disabled || loading"
    :autofoucs="autofoucs"
    :type="nativeType"
  >
    <Icon v-if="loading" icon="spinner" spin></Icon>
    <Icon v-if="icon" :icon="icon"></Icon>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<style></style>
