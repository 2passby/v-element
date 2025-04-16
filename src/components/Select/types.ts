import type { VNode } from 'vue'
export type valuetype = string | number
export interface SelectOptions {
  label: string
  value: valuetype
  disabled?: boolean
}

export interface SelectProps {
  // v-model
  modelValue: valuetype
  //填入选项
  options?: SelectOptions[]
  //自定义渲染函数
  renderLabel?: renderLabelFunc
  placeholder?: string
  disabled?: boolean

  clearable?: boolean
  //自定义过滤
  filterable?: boolean
  //自定义过滤方法
  filterMethod?: CustomeFilterFunction
  //远程请求获取option
  remote?: boolean
  //远程请求传递的自定义方法
  remoteMethod?: CustomeFilterRemoteFunction
}

export interface SelectEmits {
  (e: 'clear'): void
  (e: 'change', value: valuetype): void
  (e: 'update:modelValue', value: valuetype): void
  (e: 'visible-change', value: boolean): void
}
export type CustomeFilterFunction = (value: string) => SelectOptions[]
export type CustomeFilterRemoteFunction = (value: string) => Promise<SelectOptions[]>
export type renderLabelFunc = (option: SelectOptions) => VNode
export interface SelectStates {
  inputValue: string
  selectOptions: undefined | SelectOptions
  mousehover: boolean
  loading: boolean
  highlightIndex: number
}
