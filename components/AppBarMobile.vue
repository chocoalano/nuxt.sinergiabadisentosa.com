<template>
    <div>
        <v-navigation-drawer v-model="drawer" style="position: fixed !important;">
            <v-list density="compact">
                <v-list-item v-for="(item, i) in items" :key="i" :value="item.url" color="teal-darken-1">
                    <NuxtLink :to="item.url">
                    <v-list-item-title v-text="item.name"></v-list-item-title>
                    </NuxtLink>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar flat app style="position: fixed !important;">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <v-img src="/pt-sinergi-abadi-sentosa.png" alt="logo" max-width="90" title
                class="mt-5 mb-5 ml-5 mr-5"></v-img>
        </v-app-bar>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const drawer = ref(null)
const items = ref([
    {
        name: 'home',
        url: "/"
    },
    {
        name: 'tentang kami',
        url: "/about"
    },
    {
        name: 'produk',
        url: "/product"
    },
    {
        name: 'penghargaan',
        url: "/awards"
    },
    {
        name: 'sertifikat',
        url: "/certificate"
    },
    {
        name: 'kerjasama',
        url: "/partner"
    },
])
</script>