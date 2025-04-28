<script setup>
import Select from '@/components/Select/Select.vue'
import { ref, h } from 'vue'
const options = [
  { label: 'hyd', value: 1 },
  { label: 'swj', value: 2 },
  { label: 'wsp', value: 3 },
  { label: 'wax', value: 4, disabled: true },
]
const Select_value = ref(1)
const customeOptions = (option) => {
  return h('div', { className: 'xyz' }, [h('b', option.label), h('span', `--${option.value}`)])
}
</script>
<template>
  <Select :options="options" :renderLabel="customeOptions" v-model="Select_value"> </Select>
</template>
