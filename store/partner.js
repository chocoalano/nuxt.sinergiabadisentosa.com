import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'
import { useAppsStore } from '~/store/apps'

export const usePartnerStore = defineStore('partner', {
  state: () => ({ 
    loading: false,
    detail: {
			image:'',
      video:''
    }
  }),
  actions: {
    async getData() {
      const { $axios } = useNuxtApp()
      this.loading = true
      const meta = useAppsStore()
      try {
        const response = await $axios.get('/compro/partner')
        const x = response.data.data
        meta.setMetaSeo(x.seo.meta_keywords, x.seo.meta_descriptions, x.seo.meta_title)
        this.detail={
          image:x.list.image,
          video:x.list.video
        }
      } catch (error) {
        alert(error.message)
      } finally {
        this.loading = false
      }
    },
  },
})