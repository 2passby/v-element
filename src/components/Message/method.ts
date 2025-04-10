import { render, h } from 'vue'
import type { MessageProps, createMessageProps } from './types'
import Message from './Message.vue'
export const createMessage = (props: createMessageProps) => {
  const container = document.createElement('div')

  const destory = () => {
    render(null, container)
  }
  const newProps = {
    ...props,
    onDestory: destory,
  }
  const vnode = h(Message, newProps)
  render(vnode, container)
  // 插入第一个子节点，利用!做非空类型断言
  document.body.appendChild(container.firstChild!)
}
