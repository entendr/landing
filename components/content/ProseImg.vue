<template>
  <figure class="prose-img-wrapper">
    <NuxtImg
      class="prose-img"
      :src="refinedSrc"
      :alt="alt"
      :width="width"
      :height="height"
      loading="lazy"
      format="avif,webp"
    />
    <caption
      v-if="alt"
      class="text-red-500 text-sm prose-img-alt"
      v-html="alt"
    />
  </figure>
</template>

<script setup lang="ts">
import { withBase } from "ufo"

const props = defineProps({
  src: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
})
const refinedSrc = computed(() => withBase(props.src, useRoute().path))
</script>

<style lang="sass" scoped>
img, svg, .image-wrapper 
  width: 100%
  max-width: 100%
  vertical-align: middle

  -moz-user-select: none !important
  -webkit-user-select: none !important
  user-select: none !important

  -moz-user-drag: none !important
  -webkit-user-drag: none !important
  user-drag: none !important

.prose-img-wrapper
  margin: 1rem 0
  max-width: 100%
  display: flex
  flex-direction: column
  align-items: center

  .prose-img
    max-width: 100%
    max-height: 100%
    object-fit: contain
    border-radius: 0.3rem

  .prose-img-alt
    margin-top: 0.5rem
    text-align: center
</style>
