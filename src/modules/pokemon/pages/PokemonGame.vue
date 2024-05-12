<template>
  <!--este template es basicamente el 'view' de mi pagina-->
  <!--seccion que tendra de objetivo mostrar un contador de victorias-->
  <CounterPokemonGame />
  <!--seccion que se mostrara en el momento en el que todavia no cargo la peticion http -->
  <section v-if="isLoading" class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-4xl mb-10">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando pokemon...</h3>
  </section>
  <!--seccion que se mostrara en el momento en el que ya cargo la peticion a la api-->
  <section v-else class="flex flex-col justify-center items-center p-10">
    <h1
      class="text-center mb-10 text-5xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl p-5"
    >
      Who is that Pokemon?
    </h1>
    <button
      class="capitalize shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] cursor-pointer transition-all p-3 px-4 rounded-2xl hover:font-bold mt-2 mb-5 bg-blue-400 hover:bg-blue-600"
      @click="getNextRound(4), increment()"
      v-if="gameStatus !== GameStatus.Playing"
    >
      Intenta de nuevo
    </button>

    <!--aqui crearemos un componente que lo que hara exactamente es mostrar la imagen en negro del pokemon -->
    <PokemonPicture
      :pokemon-id="getPokemonOption.id"
      :show-pokemon="gameStatus !== GameStatus.Playing"
    />
    <!-- aqui estara el componente que mostrara las opciones del pokemon que se ve en la imagen-->
    <PokemonOption
      :options="options"
      :blockSelection="gameStatus !== GameStatus.Playing"
      :correctAnswer="getPokemonOption.id"
      @selectedOption="checkAnswer"
    />

    <h3>{{ losing }}</h3>
    <h3>{{ winning }}</h3>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
//importo gamesstatus desde interfaz
import { GameStatus } from '../interfaces'
import PokemonOption from '../components/PokemonOption.vue'
import PokemonPicture from '../components/PokemonPicture.vue'
import { usePokemonGame } from '../composables/usePokemonGame'
//mis funcionalidades
import CounterPokemonGame from '../components/CounterPokemonGame.vue'

//importo el composable
const {
  getPokemonOption,
  isLoading,
  gameStatus,
  checkAnswer,
  pokemonOptions: options,
  getNextRound,
  won,
  lost,
  games
} = usePokemonGame()

const winning = ref(won.value)
const losing = ref(lost.value)

// Función para incrementar los contadores de victorias y derrotas
const increment = () => {
  if (gameStatus.value === GameStatus.Won) {
    winning.value++
  } else if (gameStatus.value === GameStatus.Lost) {
    losing.value++
  }
}
</script>
