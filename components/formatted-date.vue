<script setup lang="ts">
import { ref } from "vue"

const props = defineProps<{
  date: String | Date;
}>()

const formattedDate = ref(
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC"
  }).format(new Date(props.date))
)
</script>


<template>
  <time
    :datetime="formattedDate"
    class="xl:pointer-events-auto text-xs font-medium text-white/50"
  >
    {{ formattedDate }}
  </time>
</template>
