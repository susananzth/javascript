import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Nunito'],
      'mono': ['IBM Plex Mono']
    },
    listStyleType: {
      'none': 'none',
      'disc': 'disc',
      'decimal': 'decimal',
      'square': 'square',
      'roman': 'upper-roman',
    }
  },
  plugins: [],
}