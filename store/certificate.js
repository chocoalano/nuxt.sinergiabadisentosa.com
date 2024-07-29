import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'
import { useAppsStore } from '~/store/apps'

export const useCertificateStore = defineStore('certificate', {
  state: () => ({ 
    loading: false,
    page:1,
    length:0,
    coverImg:null,
    data: [],
    detail: {
      cover_image:null,
      description:null,
      title:null,
      item:[]
    },
  }),
  actions: {
    async getData() {
      const { $axios } = useNuxtApp()
      this.loading = true
      const meta = useAppsStore()
      try {
        const response = await $axios.get(`/compro/certificate?perPage=8&page=${this.page}&search=`)
        const x = response.data.data
        meta.setMetaSeo(x.seo.meta_keywords, x.seo.meta_descriptions, x.seo.meta_title)
        this.coverImg = x.seo.meta_image
        this.data = x.list.data
      } catch (error) {
        console.log(error.message);
      } finally {
        this.loading = false
      }
    },

    async getDataFromSlug(slug) {
      const { $axios } = useNuxtApp()
      this.loading = true
      const meta = useAppsStore()
      try {
        const response = await $axios.get(`/compro/certificate/${slug}`)
        const x = response.data.data
        meta.setMetaSeo(x.title, x.description, x.title)
        this.detail = {
          cover_image:x.cover_image,
          description:x.description,
          title:x.title,
          item:x.item,
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        this.loading = false
      }
    },
  },
})