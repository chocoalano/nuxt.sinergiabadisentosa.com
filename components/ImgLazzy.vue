<template>
    <div>
        <v-skeleton-loader type="image" v-if="src === null" />
        <v-img :height="height" :src="src" cover lazy-src="@/assets/img/page-load.jpg" v-else>
            <template v-slot:placeholder>
                <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular color="#00695C" indeterminate></v-progress-circular>
                </div>
            </template>
        </v-img>
    </div>
</template>
<script setup>
const props = defineProps({
    src: {
        type: String,
        required: false,
    },
    height: {
        type: String,
        required: true,
    },
});
</script>