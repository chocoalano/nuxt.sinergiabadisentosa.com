import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'

export const useReasonStore = defineStore('reason', {
  state: () => ({ 
    loading: false,
    data: {
      cover_image:'',
      title:'',
      description:'',
      certification_image:'',
      active:'',
    }
  }),
  actions: {
    async getData() {
      const { $axios } = useNuxtApp()
      this.loading = true
      try {
        const response = await $axios.get('/compro/reason')
        const fetch = response.data.data
        this.data = {
          cover_image:fetch.cover_image,
          title:fetch.title,
          description:fetch.description,
          certification_image:fetch.certification_image,
          active:fetch.active,
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        this.loading = false
      }
    },
  },
})