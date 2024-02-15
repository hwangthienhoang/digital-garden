import {
  computed,
  defineComponent,
  h,
  onMounted,
  shallowRef,
  Transition,
} from 'vue'
import AstronautWhiteSvg from '../resources/AstronautWhiteSvg.vue'
import AstronautBlackSvg from '../resources/AstronautBlackSvg.vue'
import { ref } from 'vue'

const toggleState = ref(false)
const isChanged = ref(false)
const isReady = ref(true)
let timer = null
const doToggle = () => {
  if (isReady.value) {
    toggleState.value = !toggleState.value
    isChanged.value = true
    isReady.value = false
    setTimeout(() => (isChanged.value = false), 500)
    timer = setTimeout(() => (isReady.value = true), 710)
  }
}

const setReady = () => {
  isReady.value = true
  timer = null
}

export const HomeHeroImage = defineComponent({
  name: 'HomeHeroImage',
  setup(props) {
    return () =>
      h(
        'div',
        {
          class: ['hero-img ', isChanged.value ? 'jumping' : ''],
          onClick: doToggle,
          onMouseenter: doToggle,
          // onMouseleave: setReady,
        },
        toggleState.value ? h(AstronautBlackSvg) : h(AstronautWhiteSvg),
      )
  },
})
