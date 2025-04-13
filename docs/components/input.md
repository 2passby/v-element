---
title: Input|V-Element
description: Input 组件的文档
---

# input输入

常用的输入组件，广泛用于表单

## 基础用法

实现了原始input的双向数据绑定
<preview path="../demo/Input/Basic.vue" title="基础用法" description="input组件的基础用法" ></preview>

## disabled禁用文本框

利用disabled属性，禁用文本框
<preview path="../demo/Input/disabled.vue" title="基础用法" description="input组件的基础用法" ></preview>

## size尺寸控制

利用size属性，控制输入框的默认大小
<preview path="../demo/Input/size.vue" title="基础用法" description="input组件的size用法" ></preview>

## 复合输入框

利用prepend和append两个插槽,放置标签或者icon实现提示效果
<preview path="../demo/Input/complex.vue" title="基础用法" description="input组件的插槽用法" ></preview>

## Textarea文本域

利用type属性，切换文本域显示模式
<preview path="../demo/Input/textarea.vue" title="基础用法" description="input组件的type用法" ></preview>

## 显示隐藏文本

利用showPassword属性，切换文本的显示隐藏
<preview path="../demo/Input/password.vue" title="基础用法" description="input组件的show用法" ></preview>

## 清空文本

利用clearable属性，显示按钮，清空已经输入的文本内容
<preview path="../demo/Input/clear.vue" title="基础用法" description="input组件的clear用法" ></preview>

## 相关属性

|     属性     |          描述           |           值           | 默认值 |
| :----------: | :---------------------: | :--------------------: | :----: |
|     type     |    控制原生input属性    | 原生input + 'textarea' |  text  |
|     size     |   控制input框默认大小   |   'large' \| 'small'   |   无   |
|  modelValue  |  输入的值，支持v-model  |           无           |   无   |
|   disabled   |       禁用输入框        |        boolean         | FALSE  |
|  clearable   |    显示清除输入按钮     |        boolean         |   无   |
| showPassword |     密码显示与隐藏      |        boolean         |   无   |
| placeholder  |    输入框默认提示值     |         string         |   无   |
|   readonly   |        是否可读         |        boolean         |   无   |
| autocomplete |      input原生属性      |         string         |  off   |
|     form     | 标记此input属于那个表单 |         string         |   无   |
|  autofocus   |      按钮自动聚焦       |        boolean         |   无   |

## 暴露接口

| 属性 |            作用             |
| :--: | :-------------------------: |
| ref  | 暴露Input组件中的输入框实例 |

## 相关事件

| 支持事件                              | 作用                               |
| :------------------------------------ | :--------------------------------- |
| (e: 'input', value: string): void     | 值改变时触发，返回新的值           |
| (e: 'change', value: string): void    | 值改变且失去焦点时触发，返回新的值 |
| (e: 'focus', value: FocusEvent): void | 获得焦点时触发，返回事件对象       |
| (e: 'blur', value: FocusEvent): void  | 失去焦点时触发，返回事件对象       |
