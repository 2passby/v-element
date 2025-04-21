<script setup>
import Collapse from '@/components/Collapse/Collapse.vue'
import CollapseItem from '@/components/Collapse/CollapseItem.vue'

import { ref } from 'vue'

const collapseValue = ref(['a'])
</script>
<template>
  <p>当前展开的项:{{ collapseValue }}</p>
  <Collapse v-model="collapseValue">
    <CollapseItem name="a" title="我是折叠的第一项">
      <h1>终于看到我了-1</h1>
      <p>今天是2025-4-21</p>
    </CollapseItem>
    <CollapseItem name="b" title="我是折叠的第二项">
      <h1>终于看到我了-2</h1>
      <p>今天是2025-4-22</p>
    </CollapseItem>
    <CollapseItem name="c" title="我是折叠的第三项" disabled>
      <h1>终于看到我了-3</h1>
      <p>今天是2025-4-23</p>
    </CollapseItem>
  </Collapse>
</template>
