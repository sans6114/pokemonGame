import axios from 'axios'

const pokeApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
})
export { pokeApi }
