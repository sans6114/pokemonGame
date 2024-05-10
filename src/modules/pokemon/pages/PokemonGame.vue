<template>
  <!--este template es basicamente el 'view' de mi pagina-->
  <!--seccion que se mostrara en el momento en el que todavia no cargo la peticion http -->
  <section v-if="isLoading" class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-4xl mb-10">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando pokemon...</h3>
  </section>
  <!--seccion que se mostrara en el momento en el que ya cargo la peticion a la api-->
  <section v-else class="flex flex-col justify-center items-center p-20">
    <h1
      class="text-center mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
    >
      ¿Quién es este pokemon?
    </h1>
    <h3>
      {{ gameStatus }}
      {{ getPokemonOption.id }}
    </h3>

    <!--aqui crearemos un componente que lo que hara exactamente es mostrar la imagen en negro del pokemon -->
    <PokemonPicture
      :pokemon-id="getPokemonOption.id"
      :show-pokemon="gameStatus !== GameStatus.Playing"
    />
    <!-- aqui estara el componente que mostrara las opciones del pokemon que se ve en la imagen-->
    <PokemonOption :options="PokemonOption" @selectedOption="checkAnswer" />
  </section>
</template>

<script setup lang="ts">
//importo gamesstatus desde interfaz
import { GameStatus } from '../interfaces'
import PokemonOption from '../components/PokemonOption.vue'
import PokemonPicture from '../components/PokemonPicture.vue'
import { usePokemonGame } from '../composables/usePokemonGame'

//importo el composable
const { getPokemonOption, isLoading, gameStatus, checkAnswer } = usePokemonGame()
</script>
