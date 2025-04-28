<script setup lang="ts">
import type { InputProps, InputEmits } from './types'
import { ref, watch, computed, useAttrs, nextTick } from 'vue'
import { formItemContextKey } from '../Form/types'
import { inject } from 'vue'
import Icon from '../Icon/Icon.vue'

defineOptions({
  name: 'Vkinput',
  inheritAttrs: false,
})
const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  disabled: false,
  autocomplete: 'off',
})
const emits = defineEmits<InputEmits>()
// 也可以在模板中直接用$atts + v-bind绑定非props传递的属性，记得禁用属性透传
const attrs = useAttrs()
// 向外暴露的真实input实例
const InputRef = ref<HTMLElement | null>()
const innerValue = ref(props.modelValue)
const isFocus = ref(false)
const passwordVisible = ref(false)
// 什么时候显示清除按钮
const showClear = computed(() => {
  return isFocus && !props.disabled && props.clearable && !!innerValue.value
})
// 什么时候支持密码显示与切换
const showPasswordArea = computed(() => {
  return !props.disabled && props.showPassword && !!innerValue.value
})
const formItemContext = inject(formItemContextKey)
//支持表单校验
const runValidation = (trigger?: string) => {
  // 捕获其中返回的校验错误
  formItemContext?.validate(trigger).catch((e) => console.log(e.errors))
}
// v-model 其实是 :modelValue 与 @update:modelValue = modelValue = $event得缩写，我们可以在子组件中原生的input输入内容变化时，发送update:modelValue到父组件，携带最新的值，此时父组件利用v-model语法糖，自动绑定了update:modelValue 事件，就可以实现父组件的双向数据绑定
const handleInput = () => {
  emits('update:modelValue', innerValue.value)
  emits('input', innerValue.value)
  runValidation('input')
}
const handleChange = () => {
  emits('update:modelValue', innerValue.value)
  emits('change', innerValue.value)
  runValidation('change')
}
const handelFocus = (e: FocusEvent) => {
  isFocus.value = true
  emits('focus', e)
}
const handelBlur = (e: FocusEvent) => {
  isFocus.value = false
  // console.log('blur触发')
  runValidation('blur')
  emits('blur', e)
}
const clear = async () => {
  innerValue.value = ''
  console.log('clear触发')
  await nextTick()
  keepFocus()
  emits('update:modelValue', innerValue.value)
  emits('clear')
  emits('change', '')
  emits('input', '')
}
const toggleVisible = async () => {
  passwordVisible.value = !passwordVisible.value
  // dom更新完成后设置焦点，保证焦点出现在正确位置，否则dom未更新结束，焦点会出现在头部
  await nextTick()
  keepFocus()
}
const keepFocus = () => {
  InputRef.value?.focus()
}
//监听传入得props值，如果props值改变，那么本地得innerValue要随之更新
watch(
  () => props.modelValue,
  (newvalue) => {
    innerValue.value = newvalue
  },
)
defineExpose({
  ref: InputRef,
})
</script>
<template>
  <!-- 利用$slots获取slot中的内容 -->
  <div
    class="vk-input"
    :class="{
      [`vk-input--${type}`]: type,
      [`vk-input--${size}`]: size,
      'is-disabled': disabled,
      'is-prepend': $slots.prepend,
      'is-append': $slots.append,
      'is-prefix': $slots.prefix,
      'is-suffix': $slots.suffix,
      'is-focus': isFocus,
    }"
  >
    <!-- 普通input输入框 -->
    <template v-if="type !== 'textarea'">
      <div v-if="$slots.prepend" class="vk-input__prepend">
        <slot name="prepend"></slot>
      </div>
      <div class="vk-input__wrapper">
        <!-- prefix插槽 -->
        <span v-if="$slots.prefix">
          <slot name="prefix"></slot>
        </span>
        <!-- 真实输入框 -->
        <input
          v-bind="attrs"
          ref="InputRef"
          :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
          :disabled="disabled"
          :placeholder="placeholder"
          :readonly="readonly"
          :autocomplete="autocomplete"
          :autofocus="autofocus"
          :form="form"
          class="vk-input__inner"
          v-model="innerValue"
          @input="handleInput"
          @focus="handelFocus"
          @blur="handelBlur"
          @change="handleChange"
        />
        <!-- suffix插槽 -->
        <span v-if="$slots.suffix || showClear">
          <slot name="suffix"></slot>
          <Icon icon="circle-xmark" v-if="showClear" class="vk-input__clear" @click="clear"></Icon>
        </span>
        <span v-if="showPasswordArea">
          <Icon
            icon="eye-slash"
            v-if="showPasswordArea && !passwordVisible"
            @click="toggleVisible"
          ></Icon>
          <Icon v-if="showPasswordArea && passwordVisible" icon="eye" @click="toggleVisible"></Icon>
        </span>
      </div>
      <div v-if="$slots.append" class="vk-input__append">
        <slot name="append"></slot>
      </div>
    </template>

    <!-- 文本域输入框 -->
    <template v-else>
      <div :class="{ 'vk-input': true, 'vk-input--textarea': true }">
        <textarea
          class="vk-textarea__wrapper"
          v-bind="attrs"
          ref="InputRef"
          v-model="innerValue"
          :disabled="disabled"
          :placeholder="placeholder"
          :readonly="readonly"
          :autocomplete="autocomplete"
          :autofocus="autofocus"
          :form="form"
          @input="handleInput"
          @focus="handelFocus"
          @blur="handelBlur"
          @change="handleChange"
        ></textarea>
      </div>
    </template>
  </div>
</template>
<style></style>
