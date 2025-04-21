import { defineConfig } from 'vitepress'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import path from 'path'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'V-Element组件库',
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
        text: 'Component',
        items: [
          { text: 'Button按钮', link: '/components/button' },
          { text: 'Input文字输入', link: '/components/input' },
          { text: 'Switch切换按钮', link: '/components/switch' },
          { text: 'Select下拉选择框', link: '/components/select' },
          { text: 'Collapse折叠组件', link: '/components/collapse' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
})
