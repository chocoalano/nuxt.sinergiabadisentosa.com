<template>
    <div>
        <v-container>
            <v-sheet>
                <v-skeleton-loader class="mx-auto border" type="image, article" v-if="loading" />
                <v-card flat v-else>
                    <v-img height="500px" :src="coverImg" cover></v-img>
                    <v-card-title primary-title class="text-center">
                        {{ title }}
                    </v-card-title>
                    <v-card-text v-html="content" />
                </v-card>
                <BannerViewPage text="PRODUK PT. SINERGI ABADI SENTOSA" btntext="Lihat"
                    btnurl="/product" />
            </v-sheet>
        </v-container>
    </div>
</template>
<script setup>
const route = useRoute()
import { ref, onMounted } from 'vue'
const loading = ref(false)
const coverImg = ref(null)
const title = ref(null)
const content = ref(null)
onMounted(() => {
    loading.value = true
    coverImg.value = 'https://aobi.co.id/images/picaward.jpg'
    title.value = `${route.params.id}`
    content.value = 'What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    loading.value = false
})
useHead({
    title: 'DETAIL ARTIKEL US PT. SINERGI ABADI SENTOSA',
    titleTemplate: 'DETAIL ARTIKEL US - PT. SINERGI ABADI SENTOSA',
})
definePageMeta({
    description: 'PT. Sinergi Abadi Sentosa adalah perusahaan terkemuka yang menyediakan jasa maklon untuk berbagai jenis produk, termasuk kosmetik, kesehatan, makanan, minuman, dan suplemen. Kami berkomitmen untuk memberikan layanan terbaik dengan standar kualitas tinggi, inovasi, dan kepuasan pelanggan sebagai prioritas utama. Dengan pengalaman bertahun-tahun di industri, PT. Sinergi Abadi Sentosa telah membangun reputasi yang kuat sebagai mitra terpercaya bagi banyak merek terkenal di Indonesia dan internasional. Kami memahami kebutuhan setiap klien dan memberikan solusi yang disesuaikan untuk memenuhi spesifikasi dan persyaratan yang ada.',
    keywords: 'Jasa Maklon Produk, Maklon Produk Kosmetik, Maklon Produk Kesehatan, Maklon Produk Makanan, Maklon Produk Herbal, Maklon Produk Minuman, Maklon Produk Perawatan Kulit, Maklon Produk Suplemen, Maklon Produk Bayi, Maklon Produk Organik',
    title: 'PT. SINERGI ABADI SENTOSA',
    type: 'Company Profile',
    site_name: 'PT. SINERGI ABADI SENTOSA',
    image: 'https://sinergiabadisentosa.com/pt-sinergi-abadi-sentosa.png',
})
</script>