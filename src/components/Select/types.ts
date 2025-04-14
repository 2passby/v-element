export interface SelectOptions {
  label: string
  value: string
  disabled?: boolean
}

export interface SelectProps {
  // v-model
  modelValue: string
  options: SelectOptions[]
  placeholder?: string
  disabled?: boolean
}

export interface SelectEmits {
  (e: 'change', value: string): void
  (e: 'update:modelValue', value: string): void
  (e: 'visible-change', value: boolean): void
}
