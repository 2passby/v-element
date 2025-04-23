---
title: Switch|V-Style
description: Switch 组件的文档
---

# Switch组件

常用的切换状态组件，点击实现状态改变，支持tab选择与enter键切换状态

## 点击切换

<preview path="../demo/Switch/basic.vue" title="基础用法" description="Switch组件的基础用法" ></preview>

## disabled属性禁用

<preview path="../demo/Switch/disabled.vue" title="基础用法" description="Switch组件的基础用法" ></preview>

## v-model传入值自定义

<preview path="../demo/Switch/modify.vue" title="基础用法" description="Switch组件的基础用法" ></preview>

## 显示提示文字

<preview path="../demo/Switch/status.vue" title="基础用法" description="Switch组件的基础用法" ></preview>

## 调整大小

<preview path="../demo/Switch/size.vue" title="基础用法" description="Switch组件的基础用法" ></preview>

## 相关属性

|     属性      |        描述        |             值              | 默认值 |
| :-----------: | :----------------: | :-------------------------: | :----: |
|  modelValue   |  必传的绑定输入值  | string \| boolean \| number |   无   |
|   disabled    | 控制 disabled 属性 |           boolean           |   无   |
|  activeText   | 开启时候的显示文本 |           string            |   无   |
| inactiveText  | 关闭时候的显示文本 |           string            |   无   |
|  activeValue  |     打开时的值     | string \| boolean \| number |  TRUE  |
| inactiveValue |    关闭时候的值    | string \| boolean \| number | FALSE  |
|     name      |      属性命名      |           string            |   无   |
|      id       |      属性 id       |           string            |   无   |
|     size      |    switch 大小     |     'small' \| 'large'      | normal |

## 相关事件

| 支持事件                           | 作用                     |
| :--------------------------------- | :----------------------- |
| (e: 'change', value: string): void | 值改变时触发，返回新的值 |
