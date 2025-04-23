---
title: Tooltip|V-Style
description: Tooltip 组件的文档
---

# Tooltip组件

通用的弹层组件，基于popper.js控制弹层位置

## placement 弹层位置

<preview path="../demo/Tooltip/basic.vue" title="基础用法" description="Tooltip组件的基础用法" ></preview>

## click 触发方式

<preview path="../demo/Tooltip/click.vue" title="trigger用法" description="Tooltip组件的触发用法" ></preview>

## manual 手动触发

<preview path="../demo/Tooltip/manual.vue" title="manual用法" description="Tooltip组件的手动用法" ></preview>

## delay 延迟触发

<preview path="../demo/Tooltip/delay.vue" title="delay用法" description="Tooltip组件的delay用法" ></preview>

## Tooltip属性

| 属性          | 描述            | 值                            | 默认值 |
| ------------- | --------------- | ----------------------------- | ------ |
| content       | 要展示的内容    | string                        | 无     |
| trigger       | 触发方式        | `hover`, `click`              | hover  |
| placement     | 弹层位置        | `bottom`,`top`,`left`,`right` | bottom |
| manual        | 手动/自动触发   | boolean                       | false  |
| popperoptions | popper.js的参数 | Object                        | 无     |
| transition    | 过渡样式        | string                        | fade   |
| opendelay     | 开启延迟        | number                        | 0      |
| closedelay    | 关闭延迟        | number                        | 0      |

## Tooltip触发事件

| 支持事件                                      | 作用                           |
| --------------------------------------------- | ------------------------------ |
| `(e: 'visible-change', value: boolean): void` | Tooltip 显示状态发生变化时触发 |
| `(e: 'click-outside', value: boolean): void`  | 点击 Tooltip 元素外侧时触发    |
