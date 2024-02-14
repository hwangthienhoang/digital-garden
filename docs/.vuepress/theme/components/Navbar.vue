<script setup lang="ts">
import NavbarBrand from '@theme/NavbarBrand.vue'
import NavbarItems from '@theme/NavbarItems.vue'
import ToggleColorModeButton from '@theme/ToggleColorModeButton.vue'
import ToggleSidebarButton from '@theme/ToggleSidebarButton.vue'
import { useElementSize, useWindowScroll, useWindowSize } from '@vueuse/core'
import { computed, ref, shallowRef, onMounted } from 'vue'
import {
  DeviceType,
  useThemeLocaleData,
  useUpdateDeviceStatus,
} from '@vuepress/theme-default/lib/client/composables/index.js'

defineEmits<(e: 'toggle-sidebar') => void>()

defineSlots<{
  before?: (props: Record<never, never>) => any
  after?: (props: Record<never, never>) => any
}>()

const themeLocale = useThemeLocaleData()

const navbar = ref<HTMLElement | null>(null)
const navbarBrand = ref<HTMLElement | null>(null)

const linksWrapperMaxWidth = ref(0)
const linksWrapperStyle = computed(() => {
  if (!linksWrapperMaxWidth.value) {
    return {}
  }
  return {
    maxWidth: linksWrapperMaxWidth.value + 'px',
  }
})

useUpdateDeviceStatus(
  DeviceType.MOBILE,
  (mobileDesktopBreakpoint: number): void => {
    // avoid overlapping of long title and long navbar links
    const navbarHorizontalPadding =
      getCssValue(navbar.value, 'paddingLeft') +
      getCssValue(navbar.value, 'paddingRight')
    if (window.innerWidth < mobileDesktopBreakpoint) {
      linksWrapperMaxWidth.value = 0
    } else {
      linksWrapperMaxWidth.value =
        navbar.value!.offsetWidth -
        navbarHorizontalPadding -
        (navbarBrand.value?.offsetWidth || 0)
    }
  },
)

function getCssValue(el: HTMLElement | null, property: string): number {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const val = el?.ownerDocument?.defaultView?.getComputedStyle(el, null)?.[
    property
  ]
  const num = Number.parseInt(val, 10)
  return Number.isNaN(num) ? 0 : num
}

const body = shallowRef<HTMLElement>()
const { height: bodyHeight } = useElementSize(body)
const { height: windowHeight } = useWindowSize()
const { y } = useWindowScroll()
const progress = computed(
  () => (y.value / (bodyHeight.value - windowHeight.value)) * 100 + '%',
)

onMounted(() => {
  body.value = document.body
})
</script>

<template>
  <header ref="navbar" class="navbar">
    <ToggleSidebarButton @toggle="$emit('toggle-sidebar')" />

    <div class="navbar-items-wrapper" :style="linksWrapperStyle">
      <span ref="navbarBrand">
        <NavbarBrand />
      </span>
      <slot name="before" />
      <NavbarItems class="can-hide" />
      <slot name="after" />
      <nav class="navbar-items navbar-items--right">
        <ToggleColorModeButton v-if="themeLocale.colorModeSwitch" />
        <NavbarSearch />
      </nav>
      <div class="progressbar">
        <div
          class="progressbar--process"
          id="progressbarID"
          v-bind:style="{ width: progress }"
        ></div>
      </div>
    </div>
  </header>
</template>
