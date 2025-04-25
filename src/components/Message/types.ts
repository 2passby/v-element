import type { VNode, ComponentInternalInstance } from 'vue'

export interface MessageProps {
  //显示信息
  message?: string | VNode
  // 显示时间
  duration?: number
  // 点击关闭
  showClose?: boolean
  // 展示类型
  type?: 'success' | 'info' | 'warning' | 'danger'
  // 默认偏移量
  offset?: number
  // 标记在instances全局message数组中的属性
  id: string
  zIndex?: number
  transitionName?: string
  onDestory: () => void
}

export interface MessageContext {
  id: string
  vnode: VNode
  props: MessageProps
  // vue的组件内部实例
  vm: ComponentInternalInstance
  destory: () => void
}

export type createMessageProps = Omit<MessageProps, 'onDestory' | 'id' | 'zIndex'>
