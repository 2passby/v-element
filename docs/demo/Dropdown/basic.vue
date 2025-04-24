<script setup>
import Dropdown from '@/components/Dropdown/Dropdown.vue'
import { h } from 'vue'
const option = [
  { key: 1, label: 'item1' },
  { key: 2, label: 'item2' },
  { key: 3, label: 'item3' },
  { key: 4, label: 'item4' },
]
</script>
<template>
  <Dropdown :menuOptions="option" trigger="click">
    <p>点我展开菜单</p>
  </Dropdown>
</template>
