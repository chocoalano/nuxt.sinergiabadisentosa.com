import axios from 'axios'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const instance = axios.create({
    baseURL: 'http://localhost:8000/api',
  })

  nuxtApp.provide('axios', instance)
})
