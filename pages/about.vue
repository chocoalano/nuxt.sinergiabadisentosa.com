<template>
    <div>
        <v-container>
            <v-sheet>
                <v-card>
                    <ImgLazzy height="500px" :src="baseApiFile+introduction.cover_image"></ImgLazzy>
                </v-card>
                <div class="d-flex justify-center mt-10 mb-10">
                    <v-card max-width="650" flat>
                        <h1 class="d-flex justify-center">{{ introduction.title }}</h1>

                        <div class="text-center" v-html="introduction.description" />
                    </v-card>
                </div>
                <AboutUs class="mt-10 mb-10" />
            </v-sheet>
        </v-container>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useAboutStore } from '~/store/about'

const store = useAboutStore()

const baseApiFile = ref('http://localhost:8000/storage/')
onMounted(() => {
    store.getIntroduction()
})

const { introduction } = storeToRefs(store)

useHead({
    title: 'ABOUT US PT. SINERGI ABADI SENTOSA',
    titleTemplate: 'ABOUT US - PT. SINERGI ABADI SENTOSA',
})
</script>