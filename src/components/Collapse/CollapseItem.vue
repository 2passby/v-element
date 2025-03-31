<script setup lang="ts">
import type { CollapseItemProps } from './types'
import { inject, computed } from 'vue'
import { CollapseContextKey } from './types'
// import Icon from '../Icon/Icon.vue'
defineOptions({
  name: 'vk-CollapseItem',
})
//传入渲染的输入
const props = defineProps<CollapseItemProps>()
//inject，接受Collapse中provide提供的activeName数据与函数接口
const CollapseContext = inject(CollapseContextKey)
//计算展开状态
const isvaild = computed(() => {
  return CollapseContext?.activeNames.value.includes(props.name)
})
//处理点击展开与折叠
const handelClick = () => {
  //如果禁用展开直接return
  if (props.disabled) return
  //放入展开数组中
  else {
    CollapseContext?.handelItemClick(props.name)
  }
}
//处理动画的js钩子函数时间组合
const transitionEvents: Record<string, (el: HTMLElement) => void> = {
  beforeEnter(el) {
    el.style.height = '0px'
    el.style.overflow = 'hidden'
  },
  enter(el) {
    el.style.height = `${el.scrollHeight}px`
  },
  afterEnter(el) {
    el.style.height = ''
    el.style.overflow = ''
  },
  beforeLeave(el) {
    el.style.height = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'
  },
  Leave(el) {
    el.style.height = '0px'
  },
  afterLeave(el) {
    el.style.height = ''
    el.style.overflow = ''
  },
}
</script>

<template>
  <div class="vk-collapse-item" :class="{ 'is-disabled': disabled }">
    <div
      class="vk-collapse-item__header"
      :class="{
        'is-disabled': disabled,
        'is-active': isvaild,
      }"
      :id="`item-header-${name}`"
      @click="handelClick"
    >
      <!-- 具名插槽为title的自定义实现 -->
      <slot name="title">{{ title }}</slot>
      <!-- 添加title右侧的icon图标实现折叠动画 -->
      <Icon icon="angle-right" class="header-angle"></Icon>
    </div>
    <Transition name="slide" v-on="transitionEvents">
      <div class="vk_collapse-item__wrapper" v-show="isvaild">
        <div class="vk-collapse-item__content" :id="`item-content-${name}`">
          <!-- 默认插槽的内容 -->
          <slot></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style></style>
