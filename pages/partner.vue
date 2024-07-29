<template>
    <div>
        <v-container>
            <v-sheet>
                <v-card flat>
                    <v-skeleton-loader type="image" v-if="loading" />
                    <v-responsive aspect-ratio="16/9" v-else>
                        <video class="video-responsive" controls :src="detail.video" alt="Sample video"></video>
                    </v-responsive>
                </v-card>
                <v-card flat>
                    <ImgLazzy height="600px" :src="baseApiFile+detail.image" />
                </v-card>
                <BannerViewPage text="PRODUK PT. SINERGI ABADI SENTOSA" btntext="Lihat" btnurl="/product" />
            </v-sheet>
        </v-container>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { usePartnerStore } from '~/store/partner'

const store = usePartnerStore()

const baseApiFile = ref('https://erp.sinergiabadisentosa.com/storage/')
onMounted(() => {
    store.getData()
})

const { loading, detail } = storeToRefs(store)

useHead({
    title: 'ABOUT US PT. SINERGI ABADI SENTOSA',
    titleTemplate: 'PARTNER - PT. SINERGI ABADI SENTOSA',
})
</script>
<style>
.video-responsive {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>