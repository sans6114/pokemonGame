/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx,vue}',
    './src/modules/pokemon/components/PokemonPicture.vue',
    './src/modules/pokemon/components/PokemonOption.vue',
    './src/modules/pokemon/components/CounterPokemonGame.vue'
  ],
  theme: {
    extend: {}
  },
  plugins: ['flowbite/plugin']
}
