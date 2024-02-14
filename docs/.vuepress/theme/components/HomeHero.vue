<script setup lang="ts">
import AutoLink from '@theme/AutoLink.vue'
import type { FunctionalComponent } from 'vue'
import { computed, h } from 'vue'
import {
  ClientOnly,
  usePageFrontmatter,
  useSiteLocaleData,
  withBase,
} from 'vuepress/client'
import type { DefaultThemeHomePageFrontmatter } from '../../shared/index.js'
import { useDarkMode } from '@vuepress/theme-default/lib/client/composables/index.js'
import { HomeHeroImage } from './HomeHeroImage'

const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()
const siteLocale = useSiteLocaleData()
const isDarkMode = useDarkMode()

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
  return frontmatter.value.heroText || siteLocale.value.title || 'Hello'
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
</script>

<template>
  <header class="hero">
    <div class="hero-item--left">
      <h1 v-if="heroText" id="main-title">
        {{ heroText }}
      </h1>

      <p v-if="tagline" class="description">
        {{ tagline }}
      </p>

      <p v-if="actions.length" class="actions">
        <AutoLink
          v-for="action in actions"
          :key="action.text"
          class="action-button"
          :class="[action.type]"
          :item="action"
        />
      </p>
    </div>
    <div class="hero-item--right">
      <HomeHeroImage />
      <p class="hero-item--right-text">Poke me 👆 to mutate my color State.</p>
    </div>
  </header>
</template>
./HomeHeroImage.ts/index.js
