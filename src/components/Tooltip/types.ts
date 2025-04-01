import type { Placement } from '@popperjs/core'
//声明props传入参数类型
export interface TooltipProps {
  content?: string
  trigger?: 'hover' | 'click'
  placement?: Placement
  manual?: boolean
}
// 声明emits触发事件类型
export interface TooltipsEmits {
  (e: 'visible-change', value: boolean): void
}

//声明tooltip向外暴漏的方法
export interface TooltipInstance {
  show: () => void
  hide: () => void
}
