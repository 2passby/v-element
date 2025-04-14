export type valuetype = string | number
export interface SelectOptions {
  label: string
  value: valuetype
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
  (e: 'change', value: valuetype): void
  (e: 'update:modelValue', value: valuetype): void
  (e: 'visible-change', value: boolean): void
}

export interface SelectStates {
  inputValue: valuetype
  selectOptions: undefined | SelectOptions
}
