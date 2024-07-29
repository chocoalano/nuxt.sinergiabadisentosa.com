import axios from 'axios'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const instance = axios.create({
    baseURL: 'https://erp.sinergiabadisentosa.com/api',
  })

  nuxtApp.provide('axios', instance)
})
