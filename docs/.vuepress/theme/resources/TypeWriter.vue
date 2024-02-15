<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    fixedText: {
      type: String,
      required: false,
    },
    displayTextArray: {
      type: Array<String>,
      required: false,
      default: [],
    },
  },
  data: () => {
    return {
      typeValue: '',
      typeStatus: false,
      // displayTextArray: [
      //   'YouTuber',
      //   'Developer',
      //   'Blogger',
      //   'Designer',
      //   'Freelancer',
      // ],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0,
    }
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200)
  },
  methods: {
    typeText() {
      if (
        this.charIndex <
        this.displayTextArray[this.displayTextArrayIndex].length
      ) {
        if (!this.typeStatus) this.typeStatus = true
        this.typeValue += this.displayTextArray[
          this.displayTextArrayIndex
        ].charAt(this.charIndex)
        this.charIndex += 1
        setTimeout(this.typeText, this.typingSpeed)
      } else {
        this.typeStatus = false
        setTimeout(this.eraseText, this.newTextDelay)
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true
        this.typeValue = this.displayTextArray[
          this.displayTextArrayIndex
        ].substring(0, this.charIndex - 1)
        this.charIndex -= 1
        setTimeout(this.eraseText, this.erasingSpeed)
      } else {
        this.typeStatus = false
        this.displayTextArrayIndex += 1
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0
        setTimeout(this.typeText, this.typingSpeed + 1000)
      }
    },
  },
})
</script>

<template>
  <div class="typewriter-container">
    <div class="typewriter-text">
      <span v-if="fixedText" class="fixed-text">{{ fixedText }}</span>
      <span class="typed-text">{{ typeValue }}</span>
      <span class="cursor" :class="{ typing: typeStatus }"></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.typewriter-container {
  --c-cursor: #2c3e50;

  .typewriter-text {
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 5rem;
    justify-content: flex-start;
    span:not(:first-child) {
      margin-left: 10px;
    }
  }
  .typed-text {
    color: #d2b94b;
  }
  .cursor {
    color: var(--c-cursor);
    background-color: var(--c-cursor);
    display: block;
    height: 1rem;
    width: 0.2rem;
    &:not(.typing) {
      animation: 0.8s blink infinite;
    }
  }

  @keyframes blink {
    from,
    to {
      background-color: transparent;
    }
    50% {
      background-color: var(--c-cursor);
    }
  }
}
</style>
