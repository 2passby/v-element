<script setup>
import Dropdown from '@/components/Dropdown/Dropdown.vue'
import { h } from 'vue'
const option = [
  { key: 1, label: h('b', 'this-is-bold'), divided: true },
  { key: 2, label: h('i', 'this-is-倾斜'), divided: true },
  { key: 3, label: 'item3', divided: true },
  { key: 4, label: 'item4', divided: true },
]
</script>
<template>
  <Dropdown :menuOptions="option">
    <p>点我展开菜单</p>
  </Dropdown>
</template>
