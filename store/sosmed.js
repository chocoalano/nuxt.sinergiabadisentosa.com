import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'

export const useSosmedStore = defineStore('sosmed', {
  state: () => ({ 
    loading: false,
    data: [], 
    contact: [],
    wa: null
  }),
  actions: {
    async getData() {
      const { $axios } = useNuxtApp()
      this.loading = true
      try {
        const response = await $axios.get('/compro/sosmed')
        this.data = response.data.data
      } catch (error) {
        alert(error.message)
      } finally {
        this.loading = false
      }
    },
    async getContact() {
      const { $axios } = useNuxtApp()
      this.loading = true
      try {
        const response = await $axios.get('/compro/contact')
        this.contact = response.data.data
        const filteredData = response.data.data.filter(item => item.hp.startsWith('+62'));
        this.wa = filteredData[0].hp
      } catch (error) {
        alert(error.message)
      } finally {
        this.loading = false
      }
    },
  },
})