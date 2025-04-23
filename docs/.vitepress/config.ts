import { defineConfig } from 'vitepress'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import path from 'path'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'V-Style组件库',
  description: '简约Vue3-组件库',

  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../../src'), // 注意路径层级调整
      },
    },
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: '展示组件',
        items: [
          { text: 'Button按钮', link: '/components/button' },
          { text: 'Icon图标组件', link: '/components/icon' },
        ],
      },
      {
        text: '交互组件',
        items: [
          { text: 'Collapse折叠组件', link: '/components/collapse' },
          { text: 'Tooltip弹层组件', link: '/components/tooltip' },
        ],
      },
      {
        text: '表单组件',
        items: [
          { text: 'Input文字输入', link: '/components/input' },
          { text: 'Switch切换按钮', link: '/components/switch' },
          { text: 'Form表单组件', link: '/components/form' },
          { text: 'Select下拉选择框', link: '/components/select' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
})
