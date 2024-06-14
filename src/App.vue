<template>
  <LayoutPokemon>
    <HeaderPokemon />
    <CountPokemon v-if="store.showPokemonOptions" />
    <PicturePokemon />

    <OptionsPokemon v-if="store.showPokemonOptions" />
    <BtnPlayAgain v-else />
  </LayoutPokemon>
</template>

<script setup lang="ts">
import { LayoutPokemon, HeaderPokemon, OptionsPokemon, PicturePokemon, CountPokemon, BtnPlayAgain } from '@/components'
import { useStorePokemons } from '@/store';

const store = useStorePokemons();
</script>
