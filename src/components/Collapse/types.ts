import type { Ref, InjectionKey } from 'vue' // 使用 import type 导入类型
export type NameType = string | number

// 传入每个item的内容 包括 对应的名字 | 标题 | 是否禁用展开
export interface CollapseItemProps {
  name: NameType
  title?: string
  disabled?: boolean
}
//传入collapse的激活数组
export interface CollapseProps {
  modelValue: NameType[]
  accordion?: boolean
}
//确定provide与inject传递值的类型
export interface CollapseContext {
  activeNames: Ref<NameType[]>
  handelItemClick: (item: NameType) => void
}

//利用Symbol初始化一个不重复的key，随后利用injectionkey规定传入的参数类型，最后返回给CollapseContextKey 作为key使用
export const CollapseContextKey: InjectionKey<CollapseContext> = Symbol('CollapseContextKey')

//规定Collaspe发射的事件类型
export interface CollaspeEmits {
  (e: 'update:modelValue', values: NameType[]): void
  (e: 'change', values: NameType[]): void
}
