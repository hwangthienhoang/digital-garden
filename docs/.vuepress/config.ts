import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress/cli'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'en-US',

  title: 'VuePress',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: ['/', '/get-started'],
  }),

  bundler: viteBundler(),
})
