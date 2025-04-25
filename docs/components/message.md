---
title: Message|V-Style
description: Message 组件的文档
---

# Message弹窗

支持组件引入使用 或者 函数式创建使用,message支持vnode格式，自定义结构

## 基本用法

<preview path="../demo/Message/basic.vue" title="基础用法" description="message组件的基础用法" ></preview>

## type类型

<preview path="../demo/Message/style.vue" title="type用法" description="message组件的type用法" ></preview>

## duration展示时间

<preview path="../demo/Message/duration.vue" title="duration用法" description="message组件的duration用法" ></preview>

## showClose手动关闭

<preview path="../demo/Message/close.vue" title="close用法" description="message组件的close用法" ></preview>

## Esc关闭 与 hover后持久显示

<preview path="../demo/Message/other.vue" title="other用法" description="message组件的other用法" ></preview>

## Message属性

| 属性      | 描述       | 值类型    | 默认值  |
| --------- | ---------- | --------- | ------- |
| message   | 显示消息   | `string`  | `Vnode` |
| duration  | 持续时间   | `number`  | 0       |
| type      | 展示类型   | `string`  | `info`  |
| showClose | 点击关闭   | `boolean` | `FALSE` |
| offset    | 默认偏移量 | `number`  | 20      |
