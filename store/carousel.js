import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'

export const useCarouselStore = defineStore('carousel', {
  state: () => ({ 
    loading: false,
    data: [] 
  }),
  actions: {
    async getData() {
      const { $axios } = useNuxtApp()
      this.loading = true
      try {
        const response = await $axios.get('/compro/carousel')
        this.data = response.data.data
      } catch (error) {
        alert(error.message)
      } finally {
        this.loading = false
      }
    },
  },
})