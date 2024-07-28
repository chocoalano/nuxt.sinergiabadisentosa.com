import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'
import { useAppsStore } from '~/store/apps'

export const useHomepageStore = defineStore('homepage', {
  state: () => ({ 
    loading: false,
  }),
  actions: {
    async getData() {
      const { $axios } = useNuxtApp()
      this.loading = true
      const meta = useAppsStore()
      try {
        const response = await $axios.get('/compro/seo/index')
        const x = response.data.data
        meta.setMetaSeo(x.meta_keywords, x.meta_descriptions, x.meta_title)
      } catch (error) {
        alert(error.message)
      } finally {
        this.loading = false
      }
    },
  },
})