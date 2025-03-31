import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Icon from '../Icon/Icon.vue'
describe('Button.vue', () => {
  //测试基础的按钮
  test('basic button', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'primary',
      },
      slots: {
        default: 'button',
      },
    })
    console.log(wrapper.html())
    //是否包含vk-button-primary这个类
    expect(wrapper.classes()).toContain('vk-button-primary')
    //返回button标签中是否包含button的文字
    expect(wrapper.get('button').text()).toBe('button')
    //检查是否触发了事件
    wrapper.get('button').trigger('click')
    console.log(wrapper.emitted())
    //检查触发事件中是否包括了click
    expect(wrapper.emitted()).toHaveProperty('click')
  })
  //测试故障按钮
  test('disabled button', () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true,
      },
      slots: {
        default: 'disabled',
      },
    })
    //检查wrapper中dom节点中是否有'disabled'属性
    expect(wrapper.attributes('disabled')).toBeDefined()
    //检查button元素属性中是否含有disabled属性
    expect(wrapper.find('button').element.disabled).toBeDefined()
    //检查wrapper里面触发的事件中是否包含click这个事件
    expect(wrapper.emitted()).not.haveOwnProperty('click')
  })
  //测试icon
  test('icon', () => {
    const wrapper = mount(Button, {
      props: {
        icon: 'arrow-up',
      },
      slots: {
        default: 'icon',
      },
      //第三方组件模拟
      global: {
        stubs: ['FontAwesomeIcon'],
      },
    })
    const iconElement = wrapper.findComponent(FontAwesomeIcon)
    expect(iconElement.exists()).toBeTruthy()
    expect(iconElement.attributes('icon')).toBe('arrow-up')
  })
  test('icon', () => {
    const wrapper = mount(Button, {
      props: {
        loading: true,
      },
      slots: {
        default: 'loading',
      },
      //第三方组件模拟
      global: {
        stubs: ['Icon'],
      },
    })
    console.log(wrapper.html())
    const iconElement = wrapper.findComponent(Icon)
    // expect(iconElement.exists()).toBeTruthy()
    expect(iconElement.attributes('icon')).toBe('spinner')
  })
})
