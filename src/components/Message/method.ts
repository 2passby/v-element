import { render, h } from 'vue'
import type { MessageProps, createMessageProps, MessageContext } from './types'
import Message from './Message.vue'
let seed = 1
const instances: MessageContext[] = []
export const createMessage = (props: createMessageProps) => {
  const id = `message_${seed++}`
  const container = document.createElement('div')

  const destory = () => {
    const idx = instances.findIndex((instance) => instance.id === id)
    if (idx != -1) {
      instances.splice(idx, 1)
    }
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

  const instance = {
    id,
    vnode,
    props: newProps,
  }
  instances.push(instance)
  return instance
}
//得到message实例数组的最后一项
export const getLastInstance = () => {
  return instances.at(-1)
}
