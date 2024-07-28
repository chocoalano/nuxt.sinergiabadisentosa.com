<template>
    <v-container>
        <div class="d-flex justify-center mt-10 mb-10">
            <v-skeleton-loader class="mx-auto" type="article" v-if="loading" />
            <v-card flat v-else>
                <h1 class="d-flex justify-center">PRODUK PT. SINERGI ABADI SENTOSA</h1>
                <p class="text-center mt-5">{{ services }}</p>
            </v-card>
        </div>
    </v-container>
</template>
<script setup>
import { ref, onMounted } from 'vue';
const loading = ref(null);
const services = ref(null);
onMounted(() => {
    loading.value = true
    services.value = 'Sebagai perusahaan maklon produk minuman serbuk, kami dapat menciptakan berbagai produk minuman serbuk sesuai dengan keinginan dan kebutuhan anda. Kami dapat menjadi partner ideal jika anda ingin meluncurkan brand minuman serbuk milik anda sendiri. Kami akan bermitra dengan anda untuk mengembangkan formulasi minuman serbuk yang sesuai dengan visi dan misi brand anda. Kami membantu anda mulai dari proses konseptualisasi produk, pengembangan formulasi, pengaturan atau penyesuaian produk akhir, serta penyelarasan merek produk akhir.'
    loading.value = false
});
</script>