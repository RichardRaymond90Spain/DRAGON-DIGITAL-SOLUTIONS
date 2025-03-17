/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)'],
        bebas: ['var(--font-bebas)'],
      },
      colors: {
        background: '#ffffff',
        foreground: '#000000',
        primary: '#007AFF',
        secondary: '#1C1C1E',
        muted: '#F5F5F7',
        'muted-foreground': '#6E6E73',
      },
    },
  },
  plugins: [],
} 