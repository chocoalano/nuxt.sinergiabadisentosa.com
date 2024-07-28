import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'
import { useAppsStore } from '~/store/apps'

export const useAboutStore = defineStore('about', {
  state: () => ({ 
    loading: false,
    data: [],
    introduction: {
      active:'',
      cover_image:'',
      cover_position:'',
      description:'',
      title:'',
    }
  }),
  actions: {
    async getData() {
      const { $axios } = useNuxtApp()
      this.loading = true
      try {
        const response = await $axios.get('/compro/about-us')
        this.data = response.data.data
      } catch (error) {
        alert(error.message)
      } finally {
        this.loading = false
      }
    },
    
    async getIntroduction() {
      const { $axios } = useNuxtApp()
      const meta = useAppsStore()
      this.loading = true
      try {
        const response = await $axios.get('/compro/about-us/introduction')
        const x = response.data.data
        meta.setMetaSeo(x.seo.meta_keywords, x.seo.meta_descriptions, x.seo.meta_title)
        this.introduction = {
          active:x.list.active,
          cover_image:x.list.cover_image,
          cover_position:x.list.cover_position,
          description:x.list.description,
          title:x.list.title,
        }
      } catch (error) {
        alert(error.message)
      } finally {
        this.loading = false
      }
    },
  },
})