import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bagoss': ['var(--font-bagoss)'],
        'sohne': ['var(--font-sohne)'],
        'pp-agrandir': ['var(--font-pp-agrandir)'],
      },
    },
  },
  plugins: [],
}

export default config
