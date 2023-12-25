// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#f42e4f" },
        { property: "og:type", content: "article" },
        { property: "og:site_name", content: "entendr." },
        { property: "og:locale", content: "en_US" },
        { name: "robots", content: "index, follow" },
      ],
      link: [
        { rel: "icon", type: "image/svg", href: "/favicon.svg" },
        {
          rel: "mask-icon", type: "image/svg", href: "/favicon.svg", color: "#669df6",
        },
        {
          rel: "apple-touch-icon", type: "image/svg", href: "/favicon.svg",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxt/image"],
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: "github-dark",
      preload: [
        "bash",
        "c",
        "cpp",
        "java",
        "julia",
        "python",
        "haskell",
        "hs",
        "f#",
        "vue",
      ],
    },
  },
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
    format: ["avif", "webp"],
    provider: "ipx",
    ipx: {},
  }
})
