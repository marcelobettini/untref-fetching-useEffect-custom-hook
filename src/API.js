import axios from "axios";
//singleton
export const API = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/'
})