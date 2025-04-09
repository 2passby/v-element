import type { Placement, Options } from '@popperjs/core'
//声明props传入参数类型
export interface TooltipProps {
  content?: string //tooltip显示的简单字符数据
  trigger?: 'hover' | 'click' //触发方式
  placement?: Placement //展示区的显示位置
  manual?: boolean //手动 or 自动展示
  popperOptions?: Partial<Options> //原生的popper.js参数支持
  transtition?: string //过渡效果的实现
  opendelay?: number //打开延迟
  closedelay?: number //关闭延迟
}
// 声明emits触发事件类型,ts函数签名类型声明
export interface TooltipsEmits {
  (e: 'visible-change', value: boolean): void
}

//声明tooltip向外暴漏expose的方法，ts组件实例对象的方法声明
export interface TooltipInstance {
  show: () => void
  hide: () => void
}
