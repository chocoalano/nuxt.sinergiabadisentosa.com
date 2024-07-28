<template>
    <v-container>
        <div class="d-flex justify-center mt-10 mb-10">
            <h1 class="d-flex justify-center">Article Posts</h1>
        </div>
        <v-skeleton-loader class="mx-auto" type="image, article" v-if="loading"></v-skeleton-loader>
        <v-row v-else>
            <v-col md="3" sm="12" v-for="i in data" :key="i.slug">
                <v-card class="mx-auto" max-width="300" flat variant="tonal" color="teal-darken-4">
                    <ImgLazzy class="align-end text-white" height="200" :src="baseApiFile + i.cover_image"></ImgLazzy>
                    <v-card-subtitle class="pt-4">{{ i.title }}</v-card-subtitle>

                    <v-card-text v-html="truncate(i.content, 100)"></v-card-text>

                    <v-card-actions>
                        <NuxtLink :to="`/${i.slug}`">
                            <v-btn color="teal-darken-1" variant="flat" class="flex-grow-1">selengkapnya</v-btn>
                        </NuxtLink>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-pagination v-model="page" :length="length" :total-visible="5" />
    </v-container>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useArticleStore } from '~/store/article'

const store = useArticleStore()

const baseApiFile = ref('http://localhost:8000/storage/')
onMounted(() => {
    store.getData(page.value)
})

const { data, loading, page, length } = storeToRefs(store)

const truncate = (str, length) => {
    if (str.length <= length) {
        return str;
    }
    return str.substring(0, length) + '...';
};
</script>