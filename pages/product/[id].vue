<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useProductStore } from '~/store/product'

const route = useRoute()

const store = useProductStore()
const slug = ref(null);

const { detail, loading } = storeToRefs(store)
const baseApiFile = ref('https://erp.sinergiabadisentosa.com/storage/')
onMounted(() => {
    slug.value = `${route.params.id}`
    store.getDataSlug(slug.value)
})
</script>
<template>
    <div>
        <v-container>
            <v-sheet>
                <v-skeleton-loader class="mx-auto border" type="image, article" v-if="loading" />
                <v-card flat v-else>
                    <ImgLazzy height="500px" :src="baseApiFile + detail.cover_image"></ImgLazzy>
                    <v-card-title primary-title class="text-center text-h3 font-weight-black mt-10 mb-10">
                        {{ detail.title }}
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-skeleton-loader class="mx-auto border" type="image, article" v-if="loading" />
                            <v-row v-else>
                                <v-col cols="12" md="4" sm="12" v-for="item in detail.child" :key="item.id">
                                    <v-card class="mx-auto" max-width="400" min-height="350" flat variant="tonal"
                                        color="teal-darken-4">
                                        <ImgLazzy class="align-end text-white" height="200"
                                            :src="baseApiFile + item.cover_image" />
                                        <v-card-title class="text-subtitle-1 font-weight-black">{{ item.title
                                            }}</v-card-title>
                                        <v-card-text class="text-center">{{ item.description }}</v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
                <BannerViewPage text="PRODUK PT. SINERGI ABADI SENTOSA" btntext="Lihat" btnurl="/product" />
            </v-sheet>
        </v-container>
    </div>
</template>