---
title: Button|V-Element
description: Button 组件的文档
---

# Button按钮

常用的操作按钮

## 基础用法

使用`type` ,`plain`, `round`, `circle`配置项来定义按钮样式
<preview path="../demo/Button/Basic.vue" title="基础用法" description="Button组件的基础用法" class="line"></preview>

## 大小尺寸控制

<preview path="../demo/Button/bigsmall.vue" title="基础用法" description="Button组件的基础用法" class="line"></preview>

## 禁用状态

利用`disabled`属性，展示按钮被禁用的状态
<preview path="../demo/Button/disabled.vue" title="基础用法" description="Button组件的基础用法" class="line"></preview>

## 添加图标

利用按钮中的`icon`属性，为按钮增加图标<br/>
icon是封装的fortawesome/free-solid-svg-icons免费图标库中的图标，用法：[https://fontawesome.com/icons](https://fontawesome.com/icons)
<preview path="../demo/Button/iconshow.vue" title="基础用法" description="Button组件的基础用法" class="line"></preview>

## 相关属性

|    属性    |       描述       |                             值                              |  默认值  |
| :--------: | :--------------: | :---------------------------------------------------------: | :------: |
|    type    |  更改按钮的样式  | `'primary' \| 'success' \| 'danger' \| 'info' \| 'warning'` |    无    |
|    size    | 更改按钮默认大小 |                    `'large' \| 'small'`                     |    无    |
| nativeType |   按钮默认行为   |              `'submit' \| 'button' \| 'reset'`              | `button` |
|   round    |     圆滑模式     |                          `boolean`                          | `FALSE`  |
|   circle   |       圆形       |                          `boolean`                          | `FALSE`  |
|  loading   |      加载中      |                          `boolean`                          | `FALSE`  |
|  disabled  |     禁止点击     |                          `boolean`                          | `FALSE`  |
| autofocus  |     自动聚焦     |                          `boolean`                          | `FALSE`  |
|    icon    |  按钮中插入图标  |                     源自 `fortawesome`                      |    无    |

<style>
  
</style>
