import { defineStore } from 'pinia'

export const useAppsStore = defineStore('apps', {
  state: () => ({ 
    metaSeo: {
      keywords:'',
      descriptions:'',
      title:'',
    }
  }),
  actions: {
    async setMetaSeo(keywords, description, title) {
      this.metaSeo = {
        keywords:keywords,
        descriptions:description,
        title:title
      }
    },
  },
})