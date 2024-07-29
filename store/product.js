import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'
import { useAppsStore } from '~/store/apps'

export const useProductStore = defineStore('product', {
  state: () => ({ 
    loading: false,
    data: [],
    detail: {
      id:null,
      cover_image:null,
      title:null,
      slug:null,
      description:null,
      active:null,
      meta_descriptions:null,
      meta_keywords:null,
      meta_title:null,
      child:[]
    },
  }),
  actions: {
    async getData() {
      const { $axios } = useNuxtApp()
      const meta = useAppsStore()
      this.loading = true
      try {
        const response = await $axios.get('/compro/product')
        const x = response.data.data
        meta.setMetaSeo(x.seo.meta_keywords, x.seo.meta_descriptions, x.seo.meta_title)
        this.data = x.list
      } catch (error) {
        console.log(error.message);
      } finally {
        this.loading = false
      }
    },
    async getDataSlug(slug) {
      const { $axios } = useNuxtApp()
      const meta = useAppsStore()
      this.loading = true
      try {
        const response = await $axios.get(`/compro/product/${slug}`)
        const x = response.data.data
        meta.setMetaSeo(x.meta_keywords, x.meta_descriptions, x.meta_title)
        this.detail = {
          id: x.id,
          cover_image: x.cover_image,
          title: x.title,
          slug: x.slug,
          description: x.description,
          active: x.active,
          meta_descriptions: x.meta_descriptions,
          meta_keywords: x.meta_keywords,
          meta_title: x.meta_title,
          child: x.child
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        this.loading = false
      }
    },
  },
})