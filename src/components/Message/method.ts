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
  // 从body中卸载当前div组件
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
  // 在原有的props上，传入卸载函数
  const newProps = {
    ...props,
    id,
    zIndex: nextIndex(),
    onDestory: destory,
  }
  // 利用h函数生成一个message组件，newprops是此时vnode接受的props参数
  const vnode = h(Message, newProps)
  // 将vnode节点插入container的dom节点中进行渲染
  // console.log('vnode', vnode)
  render(vnode, container)
  // 插入第一个子节点，利用!做非空类型断言
  document.body.appendChild(container.firstChild!)
  //本次创建的message实例放入全局的instances中，方便获取上一个message信息
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
  // console.log('idx', idx)
  if (idx <= 0) return 0
  else {
    const prev = instances[idx - 1]
    return prev.vm.exposed!.bottomOffset.value
  }
}
