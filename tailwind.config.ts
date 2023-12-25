import type { Config } from "tailwindcss"
import typography from "@tailwindcss/typography"

export default {
  content: [
    "./content/**/*.md",
  ],
  safelist: ["rounded-lg", "rounded-full,"],
  theme: {
    extend: {
      backgroundColor: {
        "primary": "rgb(181,0,54)"
      },
      fontSize: {
        "2xs": ".6875rem",
      },
      opacity: {
        2.5: "0.025",
        7.5: "0.075",
        15: "0.15",
      },
    },
  },
  plugins: [
    typography,

    // @ts-ignore
    // ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  ],
} as Config

