<template>
    <div style="width: 100%">
        <v-skeleton-loader class="mx-auto" type="image" v-if="loading"></v-skeleton-loader>
        <iframe v-else width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
            :src="iframe"></iframe>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
const loading = ref(null);
const iframe = ref(null);
onMounted(() => {
    loading.value = true
    iframe.value = 'https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
    loading.value = false
});
</script>