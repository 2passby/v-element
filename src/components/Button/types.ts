export type ButtonType = 'primary' | 'success' | 'warning' | 'info' | 'danger'
export type ButtonSize = 'large' | 'small'
export type NativeType = 'submit' | 'button' | 'reset'
export interface ButtonInstance {
  ref: HTMLButtonElement
}
export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  nativeType?: NativeType
  plain?: boolean
  round?: boolean
  circle?: boolean
  disabled?: boolean
  autofoucs?: boolean
  loading?: boolean
  icon?: string
}
