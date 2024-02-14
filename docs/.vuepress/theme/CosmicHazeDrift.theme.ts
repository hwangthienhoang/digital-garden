import type { Theme } from 'vuepress/core'
import { getDirname, path } from 'vuepress/utils'
import { defaultTheme, type DefaultThemeOptions } from '@vuepress/theme-default'

const __dirname = getDirname(import.meta.url)

export const CosmicHazeDriftTheme = (options: DefaultThemeOptions): Theme => {
  return {
    name: 'cosmic-haze-drift',
    extends: defaultTheme(options),

    // override layouts in child theme's client config file
    // notice that you would build ts to js before publishing to npm,
    // so this should be the path to the js file
    // clientConfigFile: path.resolve(__dirname, './client.js'),

    // override component alias
    alias: {
      '@theme/Navbar.vue': path.resolve(__dirname, './components/Navbar.vue'),
      '@theme/Home.vue': path.resolve(__dirname, './components/Home.vue'),
    },
  }
}
