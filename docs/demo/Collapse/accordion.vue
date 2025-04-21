<script setup>
import Collapse from '@/components/Collapse/Collapse.vue'
import CollapseItem from '@/components/Collapse/CollapseItem.vue'

import { ref } from 'vue'

const collapseValue = ref(['a'])
</script>
<template>
  <p>手风琴打开项:{{ collapseValue }}</p>
  <Collapse v-model="collapseValue" accordion>
    <CollapseItem name="a" title="手风琴-dou">
      <h1>终于看到我了-1</h1>
      <p>我是音调do</p>
    </CollapseItem>
    <CollapseItem name="b" title="手风琴-re">
      <h1>终于看到我了-2</h1>
      <p>我是音调re</p>
    </CollapseItem>
    <CollapseItem name="c" title="手风琴-mi">
      <h1>终于看到我了-3</h1>
      <p>我是音调me</p>
    </CollapseItem>
    <CollapseItem name="d" title="手风琴-fa">
      <h1>终于看到我了-4</h1>
      <p>我是音调fa</p>
    </CollapseItem>
    <CollapseItem name="e" title="手风琴-so">
      <h1>终于看到我了-5</h1>
      <p>我是音调so</p>
    </CollapseItem>
  </Collapse>
</template>
