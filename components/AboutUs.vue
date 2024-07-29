<template>
    <v-container>
        <v-skeleton-loader class="mx-auto border" type="image, article" v-if="loading" />
        <div v-else>
            <v-row v-for="i in data" :key="i.id">
                <v-col md="6" sm="12" v-if="i.cover_position == 'Left'">
                    <v-card flat>
                        <ImgLazzy height="300px" :src="baseApiFile + i.cover_image"></ImgLazzy>
                    </v-card>
                </v-col>
                <v-col md="6" sm="12">
                    <v-card max-width="650" flat>
                        <h1 class="d-flex justify-center">{{ i.title }}</h1>

                        <v-card-text v-html="i.description" />
                        <v-card-actions>
                            <v-btn color="teal-darken-1" variant="flat" class="flex-grow-1"
                                height="48">selengkapnya</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col md="6" sm="12" v-if="i.cover_position == 'Right'">
                    <v-card flat>
                        <ImgLazzy height="300px" :src="baseApiFile + i.cover_image"></ImgLazzy>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useAboutStore } from '~/store/about'

const store = useAboutStore()

const baseApiFile = ref('https://erp.sinergiabadisentosa.com/storage/')
onMounted(() => {
    store.getData()
})

const { data, loading } = storeToRefs(store)
</script>