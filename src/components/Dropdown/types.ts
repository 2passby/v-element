import type { VNode } from 'vue'
import type { TooltipProps } from '../Tooltip/types'

export interface Dropdownprops extends TooltipProps {
  menuOptions: MenuOptions[]
}

export interface MenuOptions {
  // 菜单主题内容
  label: string | VNode
  //key标识每个菜单项目
  key: string | number
  //菜单是否可点击
  disabled?: boolean
  //此项目菜单是否需要分隔符号
  divided?: boolean
}

export interface DropdownEmits {
  (e: 'visible-change', value: boolean): void
  (e: 'select', value: MenuOptions): void
}
export interface DropdownInstance {
  show: () => void
  hide: () => void
}
