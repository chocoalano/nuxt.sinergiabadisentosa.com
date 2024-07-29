import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'

export const useValueStore = defineStore('value', {
  state: () => ({ 
    loading: false,
    data: [] 
  }),
  actions: {
    async getData() {
      const { $axios } = useNuxtApp()
      this.loading = true
      try {
        const response = await $axios.get('/compro/values')
        this.data = response.data.data
      } catch (error) {
        console.log(error.message);
      } finally {
        this.loading = false
      }
    },
  },
})