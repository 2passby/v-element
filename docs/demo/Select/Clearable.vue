<script setup>
import Select from '@/components/Select/Select.vue'
import { ref, computed } from 'vue'
const options = [
  { label: 'hyd', value: '1' },
  { label: 'swj', value: '2' },
  { label: 'wsp', value: '3' },
  { label: 'wax', value: '4', disabled: true },
]
const selectOption = ref('2')
const label_select = computed(
  () => options.find((item) => item.value === selectOption.value)?.label,
)
</script>
<template>
  <Select :options="options" clearable v-model="selectOption"></Select>
  <h4>当前选中的是{{ label_select }}</h4>
</template>
