<template>
  <LayoutPokemon>
    <HeaderPokemon />
    <PicturePokemon :id="pokemonSelected?.id" :name="pokemonSelected?.name" />
    <CardPokemon
      v-for="pokemon in pokemonOptions"
      :key="pokemon.id"
      :id="pokemon.id"
      :name="pokemon.name"
    />
    <FooterPokemon />
  </LayoutPokemon>
</template>

<script setup lang="ts">
import {
  LayoutPokemon,
  HeaderPokemon,
  FooterPokemon,
  CardPokemon,
  PicturePokemon,
} from "@/components";
import { usePokemon } from "@/composables";

const { pokemonOptions, pokemonSelected } = usePokemon();
</script>
