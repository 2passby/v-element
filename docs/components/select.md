---
title: Select|V-Element
description: Select 组件的文档
---

# Switch组件

常用的下拉选择组件，选择某个状态,支持foucs后enter开关,键盘上下键选择选项 以及 按下Esc关闭下拉框

## 基础用法

可以作为dom中基本的select使用，支持选择

<preview path="../demo/Select/basic.vue" title="基础用法" description="Select组件的基本用法" ></preview>

## 清除选项

clearable属性，支持按下清除按钮清除目前选中的选项

<preview path="../demo/Select/Clearable.vue" title="清除用法" description="Select组件的clearable用法" ></preview>

## 禁用选项

disabled属性，禁用select

<preview path="../demo/Select/disabled.vue" title="禁用用法" description="Select组件的禁用用法" ></preview>

## 提示选项

placeholder属性，提示要选择值类型

<preview path="../demo/Select/placeholder.vue" title="placeholder用法" description="Select组件的placeholde用法" ></preview>

## 过滤选项

filterable属性，若不传入filterMethod ，采用默认行为匹配字符过滤

<preview path="../demo/Select/filter.vue" title="filter用法" description="Select组件的过滤用法" ></preview>

## 远程获取option

通过remoteMethod返回一个promise类型的Selectoption数组，实现远程获取options值

<preview path="../demo/Select/remote.vue" title="remote" description="remote组件的过滤用法" ></preview>

## 相关属性

| 属性          | 描述                                           | 值                                                         | 默认值 |
| :------------ | :--------------------------------------------- | :--------------------------------------------------------- | :----- |
| modelValue    | 必传的绑定输入值                               | string \| number                                           | 无     |
| disabled      | 控制 disabled 属性                             | boolean                                                    | 无     |
| placeholder   | 显示提示值                                     | string                                                     | 无     |
| clearable     | 点击清除                                       | boolean                                                    | FALSE  |
| filterable    | 支持过滤                                       | boolean                                                    | FALSE  |
| remote        | 支持远程请求获取值                             | boolean                                                    | FALSE  |
| filterMethod  | 过滤方法                                       | (value: string) => SelectOptions[]                         | 无     |
| remoteMethod  | 远程请求方法                                   | (value: string) => Promise<SelectOptions[]>                | 无     |
| SelectOptions | 一个对象，包括 label, value, disabled 三个属性 | label: string, value: number \| string, disabled?: boolean | 无     |

## 相关事件

| 支持事件                                           | 作用                                                      |
| :------------------------------------------------- | :-------------------------------------------------------- |
| `(e: 'change', value: string): void`               | 值改变且失去焦点触发，返回新的值                          |
| `(e: 'visible-change', value: boolean): void`      | 显示模式改变后触发                                        |
| `(e: 'clear'): void`                               | 清除选择选项后触发                                        |
| `(e: 'update:modelValue', value: valuetype): void` | 实现 v-model 的依赖，v-model 是 modelValue 与该事件的合并 |
