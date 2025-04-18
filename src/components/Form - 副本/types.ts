import type { InjectionKey } from 'vue'
import type { RuleItem, ValidateError, ValidateFieldsError } from 'async-validator'
import type { promises } from 'dns'
export interface FormItemProps {
  label: string
  prop?: string
}
export type FormRules = Record<string, RuleItem[]>
export interface FormProps {
  model: Record<string, any>
  rules?: Record<string, RuleItem[]>
}

export interface FromContext extends FormProps {
  addField: (field: FormItemContext) => void
  removeField: (field: FormItemContext) => void
}

export interface FormItemContext {
  validate: (trigger?: string) => any
  prop: string
}
export interface FormValidateFailure {
  errors: ValidateError[] | null
  fields: ValidateFieldsError
}

export interface FormInstance {
  validate: () => Promise<any>
}

// InjectionKey<FromContext> 表示 provide提供的值必须是FromContext类型

export const formContextKey: InjectionKey<FromContext> = Symbol('formContextKey')

//提供给formitem中的输入组件的validate方法
export const formItemContextKey: InjectionKey<FormItemContext> = Symbol('FormItemContext')
