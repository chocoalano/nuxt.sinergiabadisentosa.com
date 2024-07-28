<template>
    <v-container>
        <div class="d-flex justify-center mt-10 mb-10">
            <v-card max-width="650" flat>
                <h1 class="d-flex justify-center">Alasan memilih kami</h1>

                <p class="text-center">
                    Perusahaan Terbaik di dalam bidang layanan Manufacturing/Maklon/Original Equipment Manufacturer (OEM)/Private Labelling
                </p>
            </v-card>
        </div>
        <v-row align="center" justify="center" dense>
            <v-skeleton-loader type="card" v-if="loading"></v-skeleton-loader>
            <v-col cols="12" md="3" v-for="i in data" :key="i.title" v-else>
                <v-card class="mx-auto" flat :subtitle="i.subtitle" :title="i.title">
                    <ImgLazzy height="250px" :src="baseApiFile+i.image"></ImgLazzy>
                    <template v-slot:prepend>
                        <v-avatar color="teal-darken-2">
                            <v-icon :icon="i.icon"></v-icon>
                        </v-avatar>
                    </template>
                    <v-card-text>{{ i.description }}</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useValueStore } from '~/store/value'

const store = useValueStore()

const baseApiFile = ref('http://localhost:8000/storage/')
onMounted(() => {
    store.getData()
})

const { data, loading } = storeToRefs(store)
</script>