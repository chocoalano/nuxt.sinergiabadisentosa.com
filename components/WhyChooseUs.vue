<template>
    <v-container>
        <v-skeleton-loader type="card" v-if="loading"></v-skeleton-loader>
        <v-row v-else>
            <v-col md="6" sm="12">
                <v-card>
                    <ImgLazzy height="500px" :src="baseApiFile+data.cover_image"></ImgLazzy>
                </v-card>
            </v-col>
            <v-col md="6" sm="12">
                <v-card max-width="650" flat>
                    <h1 class="d-flex justify-center mb-10">{{ data.title }}</h1>

                    <v-card-text v-html="data.description" />
                    <v-card-text>
                        <ImgLazzy height="50px" :src="baseApiFile+data.certification_image"></ImgLazzy>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useReasonStore } from '~/store/reason'

const store = useReasonStore()

const baseApiFile = ref(process.env.API_ASSET_URL)
onMounted(() => {
    store.getData()
})

const { data, loading } = storeToRefs(store)
</script>