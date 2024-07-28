<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { slugify } from '@/utils/slugify';
import { useAwardsStore } from '~/store/awards'

const store = useAwardsStore()

const baseApiFile = ref(process.env.API_ASSET_URL)
onMounted(() => {
    store.getData()
})

const { data, coverImg, loading } = storeToRefs(store)

useHead({
    title: 'ABOUT US PT. SINERGI ABADI SENTOSA',
    titleTemplate: 'ABOUT US - PT. SINERGI ABADI SENTOSA',
})

const slug=(text)=> {
      return slugify(text);
    }
</script>
<template>
    <div>
        <v-container>
            <v-skeleton-loader class="mx-auto border" type="image, article" v-if="loading" />
            <v-sheet v-else>
                <v-card flat>
                    <ImgLazzy height="500px" :src="baseApiFile+coverImg" cover></ImgLazzy>
                </v-card>
                <div class="d-flex justify-center mt-10 mb-10">
                    <v-card max-width="1050" flat>
                        <h3 class="d-flex justify-center">PT. SINERGI ABADI SENTOSA</h3>
                        <h1 class="d-flex justify-center"><strong>PENGHARGAAN</strong></h1>
                        <v-divider :thickness="4" color="teal-darken-4" class="mt-2 mb-5"></v-divider>
                    </v-card>
                </div>
                <v-container>
                    <v-row>
                        <v-col cols="12" md="4" sm="12" v-for="item in data" :key="item.id">
                            <v-card class="mx-auto" max-width="400" min-height="350" flat variant="tonal"
                                color="teal-darken-4">
                                <ImgLazzy class="align-end text-white" height="200" :src="baseApiFile+item.cover_image" />
                                <v-card-title class="text-subtitle-1 text-center font-weight-black">{{ item.title }}</v-card-title>
                                <v-card-text class="text-center">{{ item.description }}</v-card-text>
                                <v-card-actions>   
                                    <v-btn :to="`/awards/${slug(item.title)}`" color="teal-darken-4" block flat variant="elevated">
                                        <NuxtLink :to="`/awards/${slug(item.title)}`" class="text-white">Read More</NuxtLink>
                                    </v-btn>
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
<!-- <script setup>
import { ref, onMounted } from 'vue';
const loading = ref(false);
const coverImg = ref(null);
const items = ref([]);
onMounted(() => {
    loading.value = true
    coverImg.value = 'https://aobi.co.id/images/picaward.jpg'
    items.value = [
        {
            img: "https://aobi.co.id/images/piagam1.jpg",
            title: "INDONESIA BUSINESS AWARD 2016",
            text: "THE WINNER COMPANY & QUALITY PRODUCT",
        },
        {
            img: "https://aobi.co.id/images/piagam3.jpg",
            title: "INDONESIA EXCELLENT QUALITY AWARD 2017",
            text: "THE MOST TRUSTED TOLL MANUFACTURE COMPANY IN QUALITY PRODUCT AND SERVICE OF THE YEAR 2017",
        },
        {
            img: "https://aobi.co.id/images/piagam4.jpg",
            title: "INDONESIA TRUSTED OF QUALITY AWARD 2018",
            text: "THE BEST QUALITY PRODUCT & CUSTOMER SATISFACTION OF THE YEAR 2018",
        },
        {
            img: "https://aobi.co.id/images/piagam5.jpg",
            title: "BEST 50 BUSINESS & COMPANIES AWARD 2018",
            text: "THE BEST COMPANY IN QUALITY PRODUCT EXCELLENT OF THE YEAR",
        },
        {
            img: "https://aobi.co.id/images/piagam6.jpg",
            title: "ANUGRAH PERUSAHAAN TERDEPAN DAN INOVATIF 2019",
            text: "PERUSAHAAN MAKLOON MINUMAN KESEHATAN TERDEPAN & INOVATIF DALAM MUTU PRODUCT DAN QUALITAS PELAYANAN MEMUASKAN 2019",
        },
        {
            img: "https://aobi.co.id/images/piagam7.jpg",
            title: "ANUGRAH PERUSAHAAN TERDEPAN DAN INOVATIF 2019",
            text: "PERUSAHAAN TERDEPAN & INOVATIF DALAM MUTU & KUALITAS PRODUK MEMUASKAN TAHUN 2019",
        },
    ]
    loading.value = false
});

useHead({
    title: 'PENGHARGAAN US PT. SINERGI ABADI SENTOSA',
    titleTemplate: 'PENGHARGAAN US - PT. SINERGI ABADI SENTOSA',
})
definePageMeta({
    description: 'PT. Sinergi Abadi Sentosa adalah perusahaan terkemuka yang menyediakan jasa maklon untuk berbagai jenis produk, termasuk kosmetik, kesehatan, makanan, minuman, dan suplemen. Kami berkomitmen untuk memberikan layanan terbaik dengan standar kualitas tinggi, inovasi, dan kepuasan pelanggan sebagai prioritas utama. Dengan pengalaman bertahun-tahun di industri, PT. Sinergi Abadi Sentosa telah membangun reputasi yang kuat sebagai mitra terpercaya bagi banyak merek terkenal di Indonesia dan internasional. Kami memahami kebutuhan setiap klien dan memberikan solusi yang disesuaikan untuk memenuhi spesifikasi dan persyaratan yang ada.',
    keywords: 'Jasa Maklon Produk, Maklon Produk Kosmetik, Maklon Produk Kesehatan, Maklon Produk Makanan, Maklon Produk Herbal, Maklon Produk Minuman, Maklon Produk Perawatan Kulit, Maklon Produk Suplemen, Maklon Produk Bayi, Maklon Produk Organik',
    title: 'PT. SINERGI ABADI SENTOSA',
    type: 'Company Profile',
    site_name: 'PT. SINERGI ABADI SENTOSA',
    image: 'https://sinergiabadisentosa.com/pt-sinergi-abadi-sentosa.png',
})
</script> -->