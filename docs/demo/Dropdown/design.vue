<script setup>
import Dropdown from '@/components/Dropdown/Dropdown.vue'
import { h } from 'vue'
const option = [
  { key: 1, label: h('b', 'this-is-bold') },
  { key: 2, label: h('i', 'this-is-倾斜') },
  { key: 3, label: 'item3' },
  { key: 4, label: 'item4' },
]
</script>
<template>
  <Dropdown :menuOptions="option">
    <p>点我展开菜单</p>
  </Dropdown>
</template>
