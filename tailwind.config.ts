import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'be-vietnam-pro': ['Be Vietnam Pro', 'sans-serif'],
      },

      colors: {
        primary: 'hsl(12, 88%, 59%)',
        secondary: 'hsl(228, 39%, 23%)',

        // Neutrals
        'dark-grayish-blue': 'hsl(227, 12%, 61%)',
        'very-dark-blue': 'hsl(233, 12%, 13%)',
        'very-pale-red': 'hsl(13, 100%, 96%)',
        'very-light-gray': 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
