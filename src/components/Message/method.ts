import { render, h, reactive } from 'vue'
import type { MessageProps, createMessageProps, MessageContext } from './types'
import useZIndex from '@/hooks/UseZindex'
import Message from './Message.vue'
let seed = 1
const instances: MessageContext[] = reactive([])
export const createMessage = (props: createMessageProps) => {
  const id = `message_${seed++}`
  const container = document.createElement('div')
  const { nextIndex } = useZIndex()
  const destory = () => {
    const idx = instances.findIndex((instance) => instance.id === id)
    if (idx != -1) {
      instances.splice(idx, 1)
    }
    render(null, container)
  }
  //实现手动调用删除函数
  const manualDestory = () => {
    const instance = instances.find((instance) => instance.id === id)
    if (instance) {
      instance.vm.exposed!.visible.value = false
    }
  }
  const newProps = {
    ...props,
    id,
    zIndex: nextIndex(),
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
    vm: vnode.component!,
    destory: manualDestory,
  }
  instances.push(instance)
  return instance
}
//得到message实例数组的最后一项
export const getLastInstance = () => {
  return instances.at(-1)
}

//获取上一个实例的bottomoffset

export const getLastBottomOffset = (id: string) => {
  const idx = instances.findIndex((instance) => instance.id === id)
  console.log('idx', idx)
  if (idx <= 0) return 0
  else {
    const prev = instances[idx - 1]
    return prev.vm.exposed!.bottomOffset.value
  }
}
