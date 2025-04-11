import type { VNode, ComponentInternalInstance } from 'vue'

export interface MessageProps {
  message?: string | VNode
  duration?: number
  showClose?: boolean
  type?: 'success' | 'info' | 'warning' | 'danger'
  offset?: number
  id: string
  zIndex: number
  transitionName?: string
  onDestory: () => void
}

export interface MessageContext {
  id: string
  vnode: VNode
  props: MessageProps
  vm: ComponentInternalInstance
  destory: () => void
}

export type createMessageProps = Omit<MessageProps, 'onDestory' | 'id' | 'zIndex'>
