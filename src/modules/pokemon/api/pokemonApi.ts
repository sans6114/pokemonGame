//importo axios que me facilitara la resolucion con peticion http
import axios from 'axios'

const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon'
})
//exporto la variable con la api dentro para poder usarla en mi composable
export { pokeApi }
