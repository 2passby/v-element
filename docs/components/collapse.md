---
title: Collapse|V-Style
description: Collapse 组件的文档
---

# Collapse折叠组件

常用的折叠组件

## 基础用法

<preview path="../demo/Collapse/basic.vue" title="基础用法" description="Collapse组件的基础用法" ></preview>

## accordion手风琴模式

打开手风琴模式后,整个Collapse中只允许展开一项，其余的会自动折叠

<preview path="../demo/Collapse/accordion.vue" title="手风琴用法" description="Collapse组件的单项展开用法" ></preview>

## disabled

CollapseItem附加disabled属性后，该项被禁用打开折叠功能

<preview path="../demo/Collapse/disabled.vue" title="disabled用法" description="Collapse组件的disabled用法" ></preview>

## Collapse属性

| 属性       | 描述               | 值       | 默认值 |
| ---------- | ------------------ | -------- | ------ |
| modelValue | 所有展开项目的name | string[] | 无     |
| accordion  | 手风琴模式         | boolean  | FALSE  |

## Collapse事件

| 支持事件                                             | 作用                    | 说明                          |
| ---------------------------------------------------- | ----------------------- | ----------------------------- |
| `(e: 'update:modelValue', values: NameType[]): void` | 实现v-model双向数据绑定 | `NameType = string \| number` |
| `(e: 'change', values: NameType[]): void`            | 展开数组值变化时触发    | `NameType = string \| number` |

## CollapseItem属性

| 属性     | 描述                          | 值               | 默认值 |
| -------- | ----------------------------- | ---------------- | ------ |
| name     | 项目名，激活时放入modevalue中 | string \| number | 必传   |
| title    | 默认插槽展示的标题            | string           | 无     |
| disabled | 禁用状态                      | boolean          | FALSE  |
