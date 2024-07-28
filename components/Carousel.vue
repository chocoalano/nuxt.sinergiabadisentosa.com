<template>
  <div>
    <v-skeleton-loader class="mx-auto" type="image" v-if="loading" />
    <v-carousel height="400" show-arrows="hover" cycle hide-delimiter-background v-else>
      <v-carousel-item v-for="(slide, i) in data" :key="i">
        <ImgLazzy height="500px" :src="baseApiFile + slide.image"></ImgLazzy>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useCarouselStore } from '~/store/carousel'

const store = useCarouselStore()

const baseApiFile = ref(process.env.API_ASSET_URL)
onMounted(() => {
    store.getData()
})

const { data, loading } = storeToRefs(store)
</script>