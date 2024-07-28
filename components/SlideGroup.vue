<template>
    <div>
        <v-skeleton-loader type="card" v-if="loading"></v-skeleton-loader>
        <v-slide-group class="pa-4" center-active show-arrows v-else>
            <v-slide-group-item v-for="n in data" :key="n.name">
                <v-card class="ma-4" width="250" flat variant="tonal" color="teal-darken-4">
                    <ImgLazzy class="align-end text-white" height="150px" :src="baseApiFile+n.cover_image"></ImgLazzy>
                    <v-card-subtitle class="pt-4">
                        {{ n.title }}
                    </v-card-subtitle>
                    <v-card-text>
                        {{ n.description }}
                    </v-card-text>
                    <v-card-actions>
                        <NuxtLink :to="`/product/${n.slug}`">
                            <v-btn color="teal-darken-1" variant="flat" class="flex-grow-1">selengkapnya</v-btn>
                        </NuxtLink>
                    </v-card-actions>
                </v-card>
            </v-slide-group-item>
        </v-slide-group>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useProductStore } from '~/store/product'

const store = useProductStore()

const baseApiFile = ref(process.env.API_ASSET_URL)
onMounted(() => {
    store.getData()
})

const { data, loading } = storeToRefs(store)
</script>