import type { InjectionKey } from 'vue'
import type { RuleItem, ValidateError, ValidateFieldsError } from 'async-validator'
export interface FormItemProps {
  label: string
  prop?: string
}
export type FormRules = Record<string, RuleItem[]>
export interface FormProps {
  model: Record<string, any>
  rules?: Record<string, RuleItem[]>
}

export interface FromContext extends FormProps {}

export interface FormItemContext {
  validate: () => any
}
export interface FormValidateFailure {
  errors: ValidateError[]
  fields: ValidateFieldsError[]
}

// InjectionKey<FormProps> 表示 provide提供的值必须是 formprops类型

export const formContextKey: InjectionKey<FormProps> = Symbol('formContextKey')

//提供给formitem中的输入组件的validate方法
export const formItemContextKey: InjectionKey<FormItemContext> = Symbol('FormItemContext')
