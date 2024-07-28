<template>
    <div>
        <v-container>
            <v-sheet>
                <v-card flat>
                    <ImgLazzy height="500px" :src="coverImg"></ImgLazzy>
                    <v-card-title>PT. SINERGI ABADI SENTOSA</v-card-title>
                </v-card>
                <div class="d-flex justify-center mt-10 mb-10">
                    <v-card max-width="1050" flat>
                        <h3 class="d-flex justify-center">Pilih Produk Berdasarkan</h3>
                        <h1 class="d-flex justify-center"><strong>KATEGORI</strong></h1>
                        <v-divider :thickness="4" color="teal-darken-4" class="mt-2"></v-divider>
                        <p class="text-center mt-5 mb-10">
                            {{ introduction }}
                        </p>
                    </v-card>
                </div>
                <v-container>
                    <v-skeleton-loader class="mx-auto border" type="image, article" v-if="loading" />
                    <v-row v-else>
                        <v-col cols="12" md="4" sm="12" v-for="item in data" :key="item.id">
                            <v-card class="mx-auto" max-width="400" flat variant="tonal" color="teal-darken-4">
                                <ImgLazzy height="200px" :src="baseApiFile+item.cover_image" class="align-end text-white"></ImgLazzy>
                                <v-card-title class="text-h6 text-md-h5">{{ item.title }}</v-card-title>
                                <v-card-text>{{ item.description }}</v-card-text>
                                <v-card-actions>   
                                    <NuxtLink :to="`/product/${item.slug}`">
                                        <v-btn color="teal-darken-4" text="Read More" block flat
                                            variant="elevated"></v-btn>
                                    </NuxtLink>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
                <BannerViewPage text="PROSES KERJASAMA OEM/MAKLON PT. SINERGI ABADI SENTOSA" btntext="Lihat"
                    btnurl="/partner" />
            </v-sheet>
        </v-container>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useProductStore } from '~/store/product'

const store = useProductStore()
const coverImg = ref(null);
const introduction = ref('');

const baseApiFile = ref('http://localhost:8000/storage/')
onMounted(() => {
    store.getData()
    coverImg.value = 'https://aobi.co.id/images/product.jpg'
    introduction.value = 'Sebagai perusahaan maklon produk minuman serbuk, kami dapat menciptakan berbagai produk minuman serbuk sesuai dengan keinginan dan kebutuhan anda. Kami dapat menjadi partner ideal jika anda ingin meluncurkan brand minuman serbuk milik anda sendiri. Kami akan bermitra dengan anda untuk mengembangkan formulasi minuman serbuk yang sesuai dengan visi dan misi brand anda. Kami membantu anda mulai dari proses konseptualisasi produk, pengembangan formulasi, pengaturan atau penyesuaian produk akhir, serta penyelarasan merek produk akhir.'
})

const { data, loading } = storeToRefs(store)
</script>