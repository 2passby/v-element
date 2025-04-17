<script setup lang="ts">
import type { FormProps } from './types'
import { provide } from 'vue'
import { formContextKey } from './types'
const props = defineProps<FormProps>()
defineOptions({
  name: 'VkForm',
})
provide(formContextKey, props)
</script>

<template>
  <form class="vk-form">
    <slot></slot>
  </form>
</template>
