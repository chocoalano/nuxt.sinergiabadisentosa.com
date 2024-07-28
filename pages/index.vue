<template>
    <div>
        <v-container>
            <v-skeleton-loader type="image" v-if="loading" />
            <v-sheet v-else>
                <Carousel />
                <Value class="mt-5 mb-10" />
                <AboutUs class="mt-10 mb-10" />
                <Services class="mt-10 mb-10" />
                <SlideGroup class="mt-10 mb-10" />
                <WhyChooseUs class="mt-10 mb-10" />
                <Article class="mt-10 mb-10"></Article>
                <!-- <MapOffice class="mt-10"></MapOffice> -->
            </v-sheet>
        </v-container>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useHomepageStore } from '~/store/homepage'

const store = useHomepageStore()
onMounted(() => {
    store.getData()
})

const { loading } = storeToRefs(store)

useHead({
    title: 'PT. SINERGI ABADI SENTOSA',
    titleTemplate: 'PT. SINERGI ABADI SENTOSA',
})
</script>