<script setup lang="ts">
import Button from './components/Button/Button.vue'
import Collapse from './components/Collapse/Collapse.vue'
import CollapseItem from './components/Collapse/CollapseItem.vue'
import Icon from './components/Icon/Icon.vue'
import axios from 'axios'
import { ref, onMounted, h, reactive } from 'vue'
import type { Placement, Options } from '@popperjs/core'
import { bottom, createPopper } from '@popperjs/core'
import Tooltip from './components/Tooltip/Tooltip.vue'
import type { TooltipInstance } from '@/components/Tooltip/types'
import Dropdown from './components/Dropdown/Dropdown.vue'
import type { MenuOptions } from './components/Dropdown/types'
import Message from './components/Message/Message.vue'
import { createMessage } from './components/Message/method'
import Input from './components/Input/Input.vue'
import Switch from './components/Switch/Switch.vue'
import Select from './components/Select/Select.vue'
import Form from './components/Form/Form.vue'
import FormItem from './components/Form/FormItem.vue'
import type { RuleItem, RuleType } from 'async-validator'
const switchvalue = ref('unactive')
const option: MenuOptions[] = [
  { key: 1, label: h('b', 'this-is-bold') },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: 'item3', divided: true },
  { key: 4, label: 'item4' },
]
//测试tooltip popper显示
let tooltipRef = ref<TooltipInstance | null>()
const show = () => {
  tooltipRef.value?.show()
}
const hide = () => {
  tooltipRef.value?.hide()
}
//预设打开的Collapse
let Collapse_openValues = ref(['a'])
//测试Tooltip动态绑定事件,无问题
// let triggers = ref<any>('hover')
// onMounted(() => {
//   setTimeout(() => {
//     triggers.value = 'click'
//   }, 2000)
// })

//测试tooltip是否支持options
let popperoptions: Partial<Options> = { placement: 'right-end', strategy: 'fixed' }

onMounted(() => {
  const instanceMessage = createMessage({
    message: 'hello-world',
    duration: 0,
    showClose: true,
    type: 'success',
  })
  createMessage({ message: 'hello-world-again', showClose: true, type: 'warning' })
  createMessage({ message: 'hello-world-again-three', showClose: true })
  createMessage({ message: 'hello-world-again-three', showClose: true, type: 'danger' })
  // setTimeout(() => {
  //   instanceMessage.destory()
  // }, 2000)
})
const inputValue = ref('传入响应式得值')
const COMref = ref<any>()
// onMounted(() => {
//   console.log(COMref.value.ref)
// })
const test = ref(3)
const test2 = ref('')
const options2 = [
  { label: '123', value: 1 },
  { label: 'xyz', value: 2 },
  { label: 'opq', value: 3 },
  { label: 'wax', value: 4, disabled: true },
]
const customRender = (option: any) => {
  return h('div', { className: 'xyz' }, [h('b', option.label), h('span', option.value)])
}
const handleRemote = (query: any) => {
  if (!query) return Promise.resolve([])
  else {
    //axios在返回值外包装了一层data
    return axios.get(`https://api.github.com/search/repositories?q=${query}`).then((res: any) => {
      return res.data.items
        .slice(0, 10)
        .map((item: any) => ({ label: item.name, value: item.node_id }))
    })
  }
}
const formvalue1 = ref()
const formvalue2 = ref()

const formValue = reactive({
  email: '',
  password: '',
  account: '',
})
const formValue2 = reactive({
  email: '',
  password: '',
  account: '',
})
const rules: Record<string, RuleItem[]> = {
  email: [
    { type: 'email', required: true, trigger: 'blur' },
    { type: 'string', required: true, trigger: 'input' },
  ],
  password: [{ type: 'string', required: true, trigger: 'blur' }],
  account: [{ type: 'string', required: true, trigger: 'blur', min: 5, max: 8 }],
}
</script>

<template>
  <h1>From组件测试</h1>
  <div class="form-test">
    <Form :model="formValue" :rules="rules">
      <FormItem label="email" prop="email">
        <Input v-model="formValue.email"></Input>
      </FormItem>
      <FormItem label="password" prop="password">
        <template #label="slotprops">
          <b> {{ slotprops.label }}</b>
        </template>
        <Input v-model="formValue.password"></Input>
      </FormItem>
      <FormItem label="account" prop="account">
        <template #default="slotprops">
          <input type="text" v-model="formValue.account" />
        </template>
      </FormItem>
      <div class="submit-form">
        <Button type="primary">提交</Button>
        <Button type="danger">重置</Button>
      </div>
    </Form>
    <div>
      form-value
      <pre>{{ formValue }}</pre>
    </div>
  </div>
  <h1>From组件测试-2</h1>
  <div class="form-test">
    <Form :model="formValue2" :rules="rules">
      <FormItem label="email" prop="email">
        <Input v-model="formValue2.email"></Input>
      </FormItem>
      <FormItem label="pasword" prop="password">
        <template #label="slotprops">
          <b> {{ slotprops.label }}</b>
        </template>
        <Input v-model="formValue2.password"></Input>
      </FormItem>
      <div class="submit-form">
        <Button type="primary">提交</Button>
        <Button type="danger">重置</Button>
      </div>
    </Form>
    <div>
      form-value
      <pre>{{ formValue }}</pre>
    </div>
  </div>
  <h1>select组件测试</h1>
  <Select
    v-model="test"
    :options="options2"
    clearable
    placeholder="还没有选择任何属性呢"
    :render-label="customRender"
    filterable
  ></Select>
  <Select
    v-model="test2"
    remote
    placeholder="远程请求"
    :remote-method="handleRemote"
    filterable
  ></Select>
  <h1>switch组件测试</h1>
  <Switch
    v-model="switchvalue"
    active-value="active"
    inactive-value="unactive"
    active-text="on"
    inactive-text="off"
    disabled
    @change="console.log('1', $event)"
  ></Switch>
  <h1>Message组件测试</h1>
  <!-- <Message message="xinxi" show-close :duration="0"></Message> -->
  <h1>Tooltip组件测试</h1>
  <Tooltip
    content="hello tooltip"
    placement="right"
    trigger="click"
    class="tool"
    :popper-options="popperoptions"
  >
    <img src="./assets/logo.svg" alt="" class="logo" />
    <template #content>
      <span>hello h-3 Tooltip</span>
    </template>
  </Tooltip>
  <Tooltip
    content="hello tooltip"
    placement="right"
    class="tool"
    :opendelay="1000"
    :closedelay="1000"
  >
    <img src="./assets/logo.svg" alt="" class="logo" />
    <template #content>
      <span>hello h-3 Tooltip</span>
    </template>
  </Tooltip>
  <Tooltip
    content="hello tooltip"
    placement="right"
    trigger="click"
    ref="tooltipRef"
    :manual="true"
  >
    <img src="./assets/logo.svg" alt="" class="logo" />
    <template #content>
      <span>hello h-3 Tooltip</span>
    </template>
  </Tooltip>
  <Button type="primary" @click="show" class="show_btn">点我展示tooltip</Button>
  <Button type="success" @click="hide">点我隐藏tooltip</Button>
  <h1>dropdown组件测试</h1>
  <Dropdown placement="right" :menu-options="option" trigger="click">
    <img src="./assets/logo.svg" alt="" class="logo" />
  </Dropdown>
  <h1>Icon组件测试</h1>
  <Icon icon="arrow-up" size="2xl" type="primary" color="red" spin></Icon>
  <h1>非plain默认-button组件测试</h1>
  <Button type="primary" ref="Button_ref">实现了我的按钮</Button>
  <Button type="success" size="large">success</Button>
  <Button type="warning">warning</Button>
  <Button type="info">info</Button>
  <Button type="danger">danger</Button>
  <Button plain>朴素按钮</Button>
  <Button disabled>禁用</Button>
  <h1>plain模式-button组件测试</h1>
  <Button type="success" plain>success</Button>
  <Button type="warning" plain>warning</Button>
  <Button type="info" plain>info</Button>
  <Button type="danger" plain>danger</Button>
  <Button plain>朴素按钮</Button>
  <Button disabled>禁用</Button>
  <h1>round模式-button组件测试</h1>
  <Button type="success" round>success</Button>
  <Button type="warning" round>warning</Button>
  <Button type="info" round>info</Button>
  <Button type="danger" round>danger</Button>
  <Button round plain>朴素按钮</Button>
  <Button disabled>禁用</Button>
  <h1>circle-button组件测试</h1>
  <Button circle type="primary">圆</Button>
  <Button circle type="success">圆</Button>
  <Button circle type="warning">圆</Button>
  <Button circle type="info">圆</Button>
  <Button circle type="danger">圆</Button>
  <h1>icon-button组件测试</h1>
  <Button loading>loading</Button>
  <Button icon="arrow-up">up</Button>
  <h1>collapse组件测试</h1>
  <!-- v-model在组件上是:modelValue 与 'update:modelValue'事件的简写 在组件中实现update:modelValue传递新值得事件 -->
  <Collapse v-model="Collapse_openValues" :accordion="false">
    <CollapseItem name="a" title="Title A">
      <!-- <template #title>
        <h3>a-title</h3>
      </template> -->
      <h1>headline title</h1>
      <div>this is content a aaa</div>
    </CollapseItem>
    <CollapseItem name="b" title="b-title">
      <p>默认插槽的文字-b-title</p>
    </CollapseItem>
    <CollapseItem name="c" title="c-title" disabled>
      <p>默认插槽的文字-c-title</p>
    </CollapseItem>
    <!-- {{ Collapse_openValues }} -->
  </Collapse>
  <Input
    size="small"
    type="text"
    v-model="inputValue"
    clearable
    showPassword
    @clear="console.log('input被清空')"
    ref="COMref"
  >
    <template #prepend>123</template>

    <template #append>456</template>
  </Input>
</template>

<style>
.submit-form {
  margin-top: 15px;
}
.form-test {
  width: 600px;
  height: 400px;
}
.tool {
  margin-right: 200px;
}
header {
  line-height: 1.5;
}
.show_btn {
  margin-left: 150px;
}

.logo {
  width: 50px;
  height: 50px;
}
.vk-select__menu-item .xyz {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
