import type { Placement, Options } from '@popperjs/core'
//声明props传入参数类型
export interface TooltipProps {
  content?: string
  trigger?: 'hover' | 'click'
  placement?: Placement
  manual?: boolean
  popperOptions?: Partial<Options>
  transtition?: string
  opendelay?: number
  closedelay?: number
}
// 声明emits触发事件类型,ts函数签名类型声明
export interface TooltipsEmits {
  (e: 'visible-change', value: boolean): void
}

//声明tooltip向外暴漏的方法，ts组件实例对象的方法声明
export interface TooltipInstance {
  show: () => void
  hide: () => void
}
