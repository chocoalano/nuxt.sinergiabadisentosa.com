import axios from 'axios'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const instance = axios.create({
    baseURL: process.env.API_URL,
  })

  nuxtApp.provide('axios', instance)
})
