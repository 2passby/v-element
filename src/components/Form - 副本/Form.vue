<script setup lang="ts">
import type { FormProps } from './types'
import { provide } from 'vue'
import { formContextKey } from './types'
import type { FormItemContext, FromContext, FormValidateFailure, FormInstance } from './types'
import type { ValidateFieldsError } from 'async-validator'
const props = defineProps<FormProps>()
defineOptions({
  name: 'VkForm',
})
//存储所有item中的事件
const fields: FormItemContext[] = []

//提供给每个formitem的函数
const addField: FromContext['addField'] = (field) => {
  fields.push(field)
}
const removeField: FromContext['removeField'] = (field) => {
  if (field.prop) {
    fields.splice(fields.indexOf(field), 1)
  }
}
//provide传递props整体 默认传递的引用，因此当父组件值变化 子组件跟着变化
provide(formContextKey, {
  ...props,
  addField,
  removeField,
})
const validate = async () => {
  let ValidationErrors: ValidateFieldsError = {}
  for (const field of fields) {
    try {
      await field.validate('')
    } catch (e) {
      const error = e as FormValidateFailure
      ValidationErrors = {
        ...ValidationErrors,
        ...error.fields,
      }
    }
  }

  if (Object.keys(ValidationErrors).length === 0) return true
  return Promise.reject(ValidationErrors)
}

const show = () => {
  // dom渲染完成后，点击可以获取到正确数量的fields
  console.log('fields', fields)
}
defineExpose<FormInstance>({
  validate: validate,
})
// 渲染过程 父组件 setup() → 父组件 onBeforeMount → 子组件 setup() → 子组件 onBeforeMount → 子组件 onMounted（调用 addField） → 父组件 onMounted → 点击按钮触发 show()

//销毁过程 父 beforeUnmount → 子 beforeUnmount → 子 unmounted → 父 unmounted
</script>

<template>
  <form class="vk-form">
    <slot></slot>
    <button @click.prevent="show">点我打印fields</button>
  </form>
</template>
