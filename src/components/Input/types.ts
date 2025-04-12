export interface InputProps {
  type?: string
  size?: 'large' | 'small'
  modelValue: string
  disabled?: boolean
  clearable?: boolean
  showPassword?: boolean
  placeholder?: string
  readonly?: boolean
  // autocomplete是string类型,mdn可查一下怎么用
  autocomplete?: string
  autofocus?: boolean
  form?: string
}

export interface InputEmits {
  (e: 'update:modelValue', value: string): void
  // input事件是只要值变化就会触发
  (e: 'input', value: string): void
  // change是值变化,值变化并且失去焦点触发
  (e: 'change', value: string): void
  (e: 'focus', value: FocusEvent): void
  (e: 'blur', value: FocusEvent): void
  (e: 'clear'): void
}
