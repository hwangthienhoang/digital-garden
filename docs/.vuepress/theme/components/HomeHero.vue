<!-- eslint-disable @typescript-eslint/explicit-function-return-type -->
<script setup lang="ts">
import AutoLink from '@theme/AutoLink.vue'
import markdownit from 'markdown-it'
import markdownitmark from 'markdown-it-mark'
import {
  ClientOnly,
  usePageFrontmatter,
  useSiteLocaleData,
  withBase,
} from 'vuepress/client'
import { useDarkMode } from '@vuepress/theme-default/lib/client/composables/index.js'
import { computed, h } from 'vue'
import type { DefaultThemeHomePageFrontmatter } from '../../shared/index.js'
import TypeWriter from '../resources/TypeWriter.vue'
import GitHubSvg from '../resources/GitHubSvg.vue'
import { HomeHeroImage } from './HomeHeroImage'

const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()
const siteLocale = useSiteLocaleData()
const isDarkMode = useDarkMode()
const md = markdownit()

const heroImage = computed(() => {
  if (isDarkMode.value && frontmatter.value.heroImageDark !== undefined) {
    return frontmatter.value.heroImageDark
  }
  return frontmatter.value.heroImage
})
const heroAlt = computed(
  () => frontmatter.value.heroAlt || heroText.value || 'hero',
)
const heroHeight = computed(() => frontmatter.value.heroHeight || 280)

const heroText = computed(() => {
  if (frontmatter.value.heroText === null) {
    return null
  }

  const output = frontmatter.value.heroText || siteLocale.value.title || 'Hello'
  try {
    return md.use(markdownitmark).render(output)
  } catch (e) {}

  return output
})

const tagline = computed(() => {
  if (frontmatter.value.tagline === null) {
    return null
  }

  return (
    frontmatter.value.tagline ||
    siteLocale.value.description ||
    'Welcome to your VuePress site'
  )
})

const actions = computed(() => {
  if (!Array.isArray(frontmatter.value.actions)) {
    return []
  }

  return frontmatter.value.actions.map(({ text, link, type = 'primary' }) => ({
    text,
    link,
    type,
  }))
})

const isGithubLink = (actionObj: any) =>
  actionObj.type === 'github-button' || actionObj.link.includes('github.com')

const writingTexts = [
  'Fun',
  'Straightforward',
  'Productive',
  'Innovative',
  'Collaborative',
  'Efficient',
  'Creative',
]
</script>

<template>
  <header class="hero">
    <div class="hero-item--left">
      <h1 v-if="heroText" id="main-title" v-html="heroText"></h1>

      <TypeWriter :displayTextArray="writingTexts" />
      <div style="height: 50px"></div>
      <p v-if="tagline" class="description">
        <span v-for="line in tagline.split('\\n')" :key="line">
          {{ line }}
          <br />
        </span>
      </p>

      <div v-if="actions.length" class="actions">
        <template v-for="action in actions" :key="action.text">
          <AutoLink
            class="action-button"
            :class="[action.type, isGithubLink(action) ? 'github-button' : '']"
            :item="action"
          >
            <template v-if="isGithubLink(action)" #before>
              <GitHubSvg />
            </template>
          </AutoLink>
        </template>
      </div>
    </div>
    <div class="hero-item--right">
      <HomeHeroImage />
      <p class="hero-item--right-text">Poke me 👆 to mutate my color State.</p>
    </div>
  </header>
</template>
./HomeHeroImage.ts/index.js
