<template>
  <NuxtLink
    v-bind="$attrs"
    :class="linkClasses"
  >
    <span class="absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100" />
    <slot
      name="icon"
      :class="iconClasses"
    />
    <span class="self-baseline text-white">
      <slot name="label" />
    </span>
  </NuxtLink>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  // children: [],
  className: {
    type: String,
    default: ""
  },
  compact: {
    type: Boolean,
    default: true
  },
  large: {
    type: Boolean,
    default: false
  },
  icon: {
    type: Function,
    default: () => ""
  },

})

const linkClasses = computed(() =>
  `${props.className} group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors ${
    props.compact ? "gap-x-2" : "gap-x-3"
  } hover:text-sky-300`
)

const iconClasses = computed(() => `flex-none ${props.large ? "h-6 w-6" : "h-4 w-4"}`)
</script>
