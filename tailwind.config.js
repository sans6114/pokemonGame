/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './node_modules/flowbite/**/*.js',
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx,vue}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/img/background.jpeg')",
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
