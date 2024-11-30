/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0a192f', // Navy blue background
        primary: {
          50: '#eefbf3',
          100: '#d6f5e3',
          200: '#b0ebcc',
          300: '#7ddcad',
          400: '#87f1ff',
          500: '#2ac275',
          600: '#1ea05e',
          700: '#1c804c',
          800: '#1b6540',
          900: '#1a5237',
        },
        accent: {
          50: '#fff9e6',
          100: '#ffeeb3',
          200: '#ffe480',
          300: '#ffd94d',
          400: '#ffcf1a',
          500: '#e6b800',
          600: '#b38f00',
          700: '#806600',
          800: '#4d3d00',
          900: '#1a1400',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
    },
  },
  plugins: [],
};