export interface SwitchProps {
  modelValue: boolean
  disabled?: boolean
  activeText?: string
  inactiveText?: string
  name?: string
  id?: string
  size?: 'small' | 'large'
}

export interface SwitchEmits {
  (e: 'change', value: string): void
  (e: 'update:modelValue', value: string): void
}
