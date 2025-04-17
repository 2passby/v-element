<script setup lang="ts">
import type { FormItemContext, FormItemProps } from './types'
import { formContextKey } from './types'
import { computed, inject, onMounted, toRef, reactive, provide } from 'vue'
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

// 根据props中传递的prop 从form组件中获取该prop属性对应的值
const innerValue = computed(() => {
  const model = formContext?.model
  if (model && props.prop && !isNil(model[props.prop])) console.log('1', model[props.prop])
  if (model && props.prop && !isNil(model[props.prop])) {
    console.log('进来了')
    return model[props.prop]
  } else {
    return null
  }
})

const itemRules = computed(() => {
  const rules = formContext?.rules
  if (rules && props.prop && !isNil(rules[props.prop])) {
    return rules[props.prop]
  } else {
    return []
  }
})
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
const validate = (trigger?: string) => {
  // props.prop传入要进行检验的字段
  const modelName = props.prop
  if (!trigger) return true
  if (trigger.length === 0) return true
  const TriggerRules = getTriggeredRules(trigger)

  if (modelName) {
    // 新建一个关于该字段 与 检验方法的validator
    const validator = new Schema({ [modelName]: TriggerRules })
    validateStatus.loading = true
    // 利用validator中的modelname字段对input中的值进行检验，返回promise
    validator
      .validate({ [modelName]: innerValue.value })
      .then(() => {
        validateStatus.state = 'success'
        console.log('no error')
      })
      .catch((e: FormValidateFailure) => {
        const { errors } = e
        validateStatus.state = 'error'
        validateStatus.errorMsg = errors && errors.length > 0 ? errors[0].message || '' : ''
        console.log(errors)
      })
      .finally(() => {
        validateStatus.loading = false
      })
  }
}
const context: FormItemContext = {
  validate: validate,
}
provide(formItemContextKey, context)
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
