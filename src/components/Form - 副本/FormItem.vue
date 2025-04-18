<script setup lang="ts">
import type { FormItemContext, FormItemProps } from './types'
import { formContextKey } from './types'
import { computed, inject, onMounted, toRef, reactive, provide, onUnmounted } from 'vue'
import { isNil } from 'lodash-es'
import Schema from 'async-validator'
import type { FormValidateFailure } from './types'
import { formItemContextKey } from './types'

defineOptions({
  name: 'VkFormItem',
})
const formContext = inject(formContextKey)
const props = defineProps<FormItemProps>()
const validateStatus = reactive({
  state: 'init',
  errorMsg: '',
  loading: false,
})
// onMounted(() => {
//   console.log(formContext?.model)
//   console.log(formContext?.rules)
// })

// 根据props中传递的prop 从form组件中获取该prop属性对应的输入值
const innerValue = computed(() => {
  const model = formContext?.model
  // if (model && props.prop && !isNil(model[props.prop])) console.log('1', model[props.prop])
  if (model && props.prop && !isNil(model[props.prop])) {
    return model[props.prop]
  } else {
    return null
  }
})
//根据prop属性中传递的名字，找到form中rules规则中对应该属性名的rule
const itemRules = computed(() => {
  const rules = formContext?.rules
  if (rules && props.prop && !isNil(rules[props.prop])) {
    return rules[props.prop]
  } else {
    return []
  }
})
//从规则中筛选出 符合要求的触发方式，并返回符合要求的规则数组
const getTriggeredRules = (trigger: string) => {
  const rules = itemRules.value
  if (rules) {
    return rules.filter((rule) => {
      if (!rule.trigger || !trigger) return true
      return rule.trigger && rule.trigger === trigger
    })
  } else {
    return []
  }
}
/** 规则验证 */
const validate = async (trigger?: string) => {
  const modelName = props.prop
  const triggeredRules = getTriggeredRules(trigger!)
  if (triggeredRules.length === 0) {
    return true
  }
  if (modelName) {
    const validator = new Schema({
      [modelName]: triggeredRules,
    })
    validateStatus.loading = true
    return validator
      .validate({ [modelName]: innerValue.value })
      .then(() => {
        validateStatus.state = 'success'
      })
      .catch((e: FormValidateFailure) => {
        const { errors } = e
        validateStatus.state = 'error'
        validateStatus.errorMsg = errors && errors.length ? errors[0].message || '' : ''
        return Promise.reject(e)
      })
      .finally(() => {
        validateStatus.loading = false
      })
  }
}
const context: FormItemContext = {
  validate: validate,
  prop: props.prop || '',
}
provide(formItemContextKey, context)

onMounted(() => {
  if (props.prop) {
    formContext?.addField(context)
  }
})
onUnmounted(() => {
  formContext?.removeField(context)
})
</script>

<template>
  <div
    class="vk-form-item"
    :class="{
      ['is-error']: validateStatus.state === 'error',
      ['is-success']: validateStatus.state === 'success',
      ['is-loading']: validateStatus.loading === true,
    }"
  >
    <label for="" class="vk-form-item__label">
      <slot name="label" :label="label">
        {{ label }}
      </slot>
    </label>
    <div class="vk-form-item__content">
      <slot :validate="validate"></slot>
      <div class="vk-form-item__error-msg" v-if="validateStatus.state === 'error'">
        {{ validateStatus.errorMsg }}
      </div>
    </div>
    {{ innerValue }} ---{{ itemRules }}
  </div>
</template>
