/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './node_modules/flowbite/**/*.js',
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx,vue}',
    './src/modules/pokemon/components/PokemonPicture.vue',
    './src/modules/pokemon/components/PokemonOption.vue'
  ],
  theme: {
    extend: {}
  },
  plugins: [require('flowbite/plugin')]
}
