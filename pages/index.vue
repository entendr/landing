<script setup lang="ts">
const { data } = await useAsyncData("content", () => {
  return queryContent("/blog").sort({"date": -1}).find()
})

useHead({
  title: "entendr."
})

</script>

<template>
  <div class="flex min-h-full flex-col bg-gray-950">
    <fixed-sidebar>
      <intro />
    </fixed-sidebar>
    <div class="relative flex-auto">
      <timeline />
      <main class="space-y-20 py-20 sm:space-y-32 sm:py-32">
        <template
          v-for="entry in data"
          :key="entry.routeId"
        >
          <Article
            :id="entry.routeId"
            :date="entry.date"
          >
            <ContentRendererMarkdown :value="entry.body || []" />
          </Article>
        </template>
      </main>
    </div>
  </div>
</template>
