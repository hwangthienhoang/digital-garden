import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress/cli'
import { theme } from './theme.config'

export default defineUserConfig({
  lang: 'en-US',

  title: 'HoangHoang.dev',
  description:
    'Empowering Code, Sharing Knowledge: Your IT Hub for Tips, Tricks, and Tech News!',
  head: [
    [
      'link',
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' },
    ],
  ],

  theme,

  bundler: viteBundler(),
})
