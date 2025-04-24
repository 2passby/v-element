---
title: Dropdown|V-Style
description: Dropdown 组件的文档
---

# Dropdown 下拉框组件

基于tooltip二次封装实现的组件,采用vnode支持渲染自定义content

## 基本用法

根据传入的options,点击展开下拉菜单
<preview path="../demo/Dropdown/basic.vue" title="基本用法" description="dropdown基本用法"></preview>

## 传入自定义结构

传入的options的label支持自定义h函数
<preview path="../demo/Dropdown/design.vue" title="自定义用法" description="dropdown自定义用法"></preview>

## disabled禁用

传入options中每一项附带disabled：true
<preview path="../demo/Dropdown/disabled.vue" title="disabled用法" description="dropdown的disabled用法"></preview>

## divide分隔符

传入options中每一项附带divided:true

<preview path="../demo/Dropdown/divided.vue" title="divided用法" description="dropdown的divided用法"></preview>

## Dropdown属性

| 属性          | 描述            | 值                            | 默认值 |
| ------------- | --------------- | ----------------------------- | ------ |
| menuOptions   | content展示菜单 | 参考上面的展示样式            | 必选   |
| content       | 要展示的内容    | string                        | 无     |
| trigger       | 触发方式        | `hover`, `click`              | hover  |
| placement     | 弹层位置        | `bottom`,`top`,`left`,`right` | bottom |
| manual        | 手动/自动触发   | boolean                       | false  |
| popperoptions | popper.js的参数 | Object                        | 无     |
| transition    | 过渡样式        | string                        | fade   |
| opendelay     | 开启延迟        | number                        | 0      |
| closedelay    | 关闭延迟        | number                        | 0      |

## Dropdown事件

| 支持事件                                      | 作用                            |
| --------------------------------------------- | ------------------------------- |
| `(e: 'visible-change', value: boolean): void` | dropdown 显示状态发生变化时触发 |
| `(e: 'select', value: MenuOptions): void`     | 选择某个可选项目时触发          |
