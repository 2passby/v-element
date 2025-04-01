<script setup lang="ts">
import Button from './components/Button/Button.vue'
import Collapse from './components/Collapse/Collapse.vue'
import CollapseItem from './components/Collapse/CollapseItem.vue'
import Icon from './components/Icon/Icon.vue'
import { ref, onMounted } from 'vue'
import { bottom, createPopper } from '@popperjs/core'
import type { Instance } from '@popperjs/core'
import Tooltip from './components/Tooltip/Tooltip.vue'
import type { TooltipInstance } from '@/components/Tooltip/types'
//测试tooltip popper显示
let tooltipRef = ref<TooltipInstance | null>()
const show = () => {
  tooltipRef.value?.show()
}
const hide = () => {
  tooltipRef.value?.hide()
}
//预设打开的Collapse
let Collapse_openValues = ref(['a'])
//测试Tooltip动态绑定事件,无问题
// let triggers = ref<any>('hover')
// onMounted(() => {
//   setTimeout(() => {
//     triggers.value = 'click'
//   }, 2000)
// })
</script>

<template>
  <h1>Tooltip组件测试</h1>
  <Tooltip content="hello tooltip" placement="right" trigger="click" class="tool">
    <img src="./assets/logo.svg" alt="" class="logo" />
    <template #content>
      <h3>hello h-3 Tooltip</h3>
    </template>
  </Tooltip>
  <Tooltip
    content="hello tooltip"
    placement="right"
    trigger="click"
    ref="tooltipRef"
    :manual="true"
  >
    <img src="./assets/logo.svg" alt="" class="logo" />
    <template #content>
      <h3>hello h-3 Tooltip</h3>
    </template>
  </Tooltip>
  <Button type="primary" @click="show" class="show_btn">点我展示tooltip</Button>
  <Button type="success" @click="hide">点我隐藏tooltip</Button>
  <h1>Icon组件测试</h1>
  <Icon icon="arrow-up" size="2xl" type="primary" color="red"></Icon>
  <h1>非plain默认-button组件测试</h1>
  <Button type="primary" ref="Button_ref">实现了我的按钮</Button>
  <Button type="success" size="large">success</Button>
  <Button type="warning">warning</Button>
  <Button type="info">info</Button>
  <Button type="danger">danger</Button>
  <Button plain>朴素按钮</Button>
  <Button disabled>禁用</Button>
  <h1>plain模式-button组件测试</h1>
  <Button type="success" plain>success</Button>
  <Button type="warning" plain>warning</Button>
  <Button type="info" plain>info</Button>
  <Button type="danger" plain>danger</Button>
  <Button plain>朴素按钮</Button>
  <Button disabled>禁用</Button>
  <h1>round模式-button组件测试</h1>
  <Button type="success" round>success</Button>
  <Button type="warning" round>warning</Button>
  <Button type="info" round>info</Button>
  <Button type="danger" round>danger</Button>
  <Button round plain>朴素按钮</Button>
  <Button disabled>禁用</Button>
  <h1>circle-button组件测试</h1>
  <Button circle type="primary">圆</Button>
  <Button circle type="success">圆</Button>
  <Button circle type="warning">圆</Button>
  <Button circle type="info">圆</Button>
  <Button circle type="danger">圆</Button>
  <h1>icon-button组件测试</h1>
  <Button loading>loading</Button>
  <Button icon="arrow-up">up</Button>
  <h1>collapse组件测试</h1>
  <!-- v-model在组件上是:modelValue 与 'update:modelValue'事件的简写 在组件中实现update:modelValue传递新值得事件 -->
  <Collapse v-model="Collapse_openValues" :accordion="false">
    <CollapseItem name="a" title="Title A">
      <!-- <template #title>
        <h3>a-title</h3>
      </template> -->
      <h1>headline title</h1>
      <div>this is content a aaa</div>
    </CollapseItem>
    <CollapseItem name="b" title="b-title">
      <p>默认插槽的文字-b-title</p>
    </CollapseItem>
    <CollapseItem name="c" title="c-title" disabled>
      <p>默认插槽的文字-c-title</p>
    </CollapseItem>
    <!-- {{ Collapse_openValues }} -->
  </Collapse>
</template>

<style scoped>
.tool {
  margin-right: 200px;
}
header {
  line-height: 1.5;
}
.show_btn {
  margin-left: 150px;
}

.logo {
  width: 50px;
  height: 50px;
}
</style>
