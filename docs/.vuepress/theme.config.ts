import type { Theme } from 'vuepress/core'
import { CosmicHazeDriftTheme } from './CosmicHazeDrift.theme'

export const theme: Theme = CosmicHazeDriftTheme({
  logo: '/images/logo.svg',

  navbar: ['/', '/get-started'],
})
