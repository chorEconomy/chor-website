import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      screens: {
        'min-991': '991px',
        'max-991': { max: '991px' }, // Custom media query for max-width
        'max-768': { max: '768px' },
      },
    },
  },
  plugins: [],
} satisfies Config;
