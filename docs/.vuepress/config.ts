import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress/cli'
import { theme } from './theme.config'

export default defineUserConfig({
  lang: 'en-US',

  title: 'HoangHoang.dev',
  description: 'Digital garden Site',
  head: [
    [
      'link',
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' },
    ],
  ],

  theme,

  bundler: viteBundler(),
})
