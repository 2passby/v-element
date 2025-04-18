<template>
  <form class="vk-form">
    <slot />
  </form>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import {
  formContextKey,
  type FormContext,
  type FormInstance,
  type FormItemContext,
  type FormProps,
  type FormValidateError,
} from './types'
import type { ValidateFieldsError } from 'async-validator'

defineOptions({
  name: 'VkForm',
})

const props = defineProps<FormProps>()

const fields: FormItemContext[] = []
const addField: FormContext['addField'] = (field) => {
  fields.push(field)
}
const removeField: FormContext['removeField'] = (field) => {
  if (field.prop) {
    fields.splice(fields.indexOf(field), 1)
  }
}

/** 表单整体验证 */

// 这里的逻辑是，调用每个formitem中的validate函数，遇到错误会返回一个promise.reject（错误信息），在for循环中利用catch捕获这个错误放在错误结果汇总数组中，随后利用promise.reject返回整个错误对象，在使用该form表单的地方，实现submit函数，调用该validate函数捕获整个错误对象，执行后续的逻辑
const validate = async () => {
  let validateErrors: ValidateFieldsError = {}
  for (const field of fields) {
    try {
      await field.validate('')
    } catch (e) {
      //捕获promise传递的reject错误，进行处理，保证for循环的正常运行
      const error = e as FormValidateError
      validateErrors = {
        ...validateErrors,
        ...error.fields,
      }
    }
  }
  if (!Object.keys(validateErrors).length) {
    return true
  }
  return Promise.reject(validateErrors)
}

/** 重置表单 */
const resetFields = (keys: string[] = []) => {
  const filterArr = keys.length > 0 ? fields.filter((field) => keys.includes(field.prop)) : fields
  console.log('我被调用了')
  filterArr.forEach((field) => field.resetField())
}

/** 清空提示信息 */
const clearValidate = (keys: string[] = []) => {
  const filterArr = keys.length > 0 ? fields.filter((field) => keys.includes(field.prop)) : fields
  filterArr.forEach((field) => field.clearValidate())
}

provide(formContextKey, {
  ...props,
  addField,
  removeField,
})

defineExpose<FormInstance>({
  validate,
  clearValidate,
  resetFields,
})
</script>
