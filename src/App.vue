<script setup lang="ts">
import Button from './components/Button/Button.vue'
import Collapse from './components/Collapse/Collapse.vue'
import CollapseItem from './components/Collapse/CollapseItem.vue'
import Icon from './components/Icon/Icon.vue'
import { ref } from 'vue'
//预设打开的Collapse
let Collapse_openValues = ref(['a'])
</script>

<template>
  <h1>Icon组件测试</h1>
  <Icon icon="arrow-up" size="2xl" spin type="primary" color="red"></Icon>
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
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
