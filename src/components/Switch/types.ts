export type SwitchvalueType = string | boolean | number
export interface SwitchProps {
  modelValue: SwitchvalueType
  disabled?: boolean
  activeText?: string
  inactiveText?: string
  activeValue?: SwitchvalueType
  inactiveValue?: SwitchvalueType
  name?: string
  id?: string
  size?: 'small' | 'large'
}

export interface SwitchEmits {
  (e: 'change', value: SwitchvalueType): void
  (e: 'update:modelValue', value: SwitchvalueType): void
}
