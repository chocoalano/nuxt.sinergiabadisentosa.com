<template>
    <v-app-bar flat app style="position: fixed !important;">
        <v-img src="/pt-sinergi-abadi-sentosa.png" alt="logo" max-width="90" title class="mt-5 mb-5 ml-5 mr-5"></v-img>

        <v-spacer></v-spacer>
        <div v-for="i in menu" :key="i.url" :to="i.url">
            <NuxtLink :to="i.url">
                <v-btn :color="'#00695C'" density="default">{{ i.name }}</v-btn>
            </NuxtLink>
        </div>
        <v-divider vertical inset></v-divider>
        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn append-icon="mdi-phone" class="ml-5 mr-5 text-none text-subtitle-1 text-white" density="default"
                    variant="flat" color="#075E54" v-bind="props">
                    Hubungi kami
                </v-btn>
            </template>
            <v-skeleton-loader class="bg-teal-darken-1 mx-auto" type="list" v-if="loading" />
            <v-list v-else>
                <v-list-item v-for="(item, i) in contact" :key="i" :value="i" @click="goToExternalPage(item.hp)">
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ item.hp }}</v-list-item-subtitle>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useSosmedStore } from '~/store/sosmed'
const store = useSosmedStore()
onMounted(() => {
    store.getContact()
})
const menu = ref([
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
const { loading, contact } = storeToRefs(store)
const validatePhoneNumber = (phoneNumber) => {
    if (phoneNumber.startsWith("021")) {
        return true;
    } else {
        return false;
    }
}
const goToExternalPage = (url) => {
    if (validatePhoneNumber(url)) {
        window.location.href = `tel:${url}`
    }else{
        window.location.href = `whatsapp://send?abid=+${url}&text=Hello%2C%20Sinergi Abadi Sentosa!/`
    }
}
</script>