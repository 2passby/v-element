<script setup>
import Select from '@/components/Select/Select.vue'
import { ref, computed } from 'vue'
const options = [
  { label: 'hyd', value: 1 },
  { label: 'swj', value: 2 },
  { label: 'wsp', value: 3 },
  { label: 'wax', value: 4, disabled: true },
]
const Select_value = ref(1)
const label_select = computed(
  () => options.find((item) => item.value === Select_value.value)?.label,
)
</script>
<template>
  <Select :options="options" v-model="Select_value" placeholder="选择姓名吧" filterable> </Select>
  <h4>当前选中的是{{ label_select }}</h4>
</template>
