import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'

export const useArticleStore = defineStore('article', {
  state: () => ({ 
    loading: false,
    page:1,
    length:0,
    data: [],
  }),
  actions: {
    async getData() {
      const { $axios } = useNuxtApp()
      this.loading = true
      try {
        const response = await $axios.get(`/compro/article?perPage=8&page=${this.page}&search=`)
        this.data = response.data.data.data
        this.length = response.data.data.last_page
      } catch (error) {
        alert(error.message)
      } finally {
        this.loading = false
      }
    },
  },
})