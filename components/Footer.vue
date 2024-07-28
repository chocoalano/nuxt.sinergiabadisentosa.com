<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useSosmedStore } from '~/store/sosmed'

const store = useSosmedStore()
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
]);
const text = ref('PT. Sinergi Abadi Sentosa merupakan perusahaan yang mengfokuskan dalam bidang Toll Manufacturing Maklon, Original Equipment Manufacturer (OEM), private labeling dan Consulting dalam pengembangan formulasi makanan dan minuman serbuk. Berdiri sejak tahun 2014 di Jakarta, PT. Sinergi Abadi Sentosa dibangun sebagai bentuk urgensi dari industri minuman serbuk dengan produk lokal yang dapat bersaing secara global.')
onMounted(() => {
  store.getData()
})
const { loading, data } = storeToRefs(store)
const getIcon = (name) => {
  switch (name) {
    case 'Instagram':
      return 'mdi-instagram'
    case 'Facebook':
      return 'mdi-facebook'
    case 'Twitter':
      return 'mdi-twitter'
    case 'LinkedIn':
      return 'mdi-linkedin'

    default:
      return 'mdi-linkedin'
  }
};
const goToExternalPage = (url) => {
  window.location.href = url
}
</script>
<template>
  <v-footer app class="bg-teal-darken-1 text-center d-flex flex-column">
    <v-container>
      <v-skeleton-loader class="bg-teal-darken-1 mx-auto" type="article" v-if="loading" />
      <v-row class="d-flex justify-center" v-else>
        <div v-for="icon in data" :key="icon.i">
          <v-btn @click="goToExternalPage(icon.url)" :icon="getIcon(icon.name)" class="mx-4" variant="text" color="white"></v-btn>
        </div>
      </v-row>
      <v-row class="d-flex justify-center mb-10 mt-5">
        <div v-for="i in menu" :key="i">
          <RouterLink :to="i.url">
            <v-btn class="mx-4" variant="text" color="white">{{ i.name }}</v-btn>
          </RouterLink>
        </div>
      </v-row>

      <div class="pt-0">{{ text }}</div>
    </v-container>
    <v-divider></v-divider>

    <div class="mt-10">
      {{ new Date().getFullYear() }} — <strong>PT. Sinergi Abadi Sentosa</strong>
    </div>
  </v-footer>
</template>
<!-- <script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const text = ref('PT. Sinergi Abadi Sentosa merupakan perusahaan yang mengfokuskan dalam bidang Toll Manufacturing Maklon, Original Equipment Manufacturer (OEM), private labeling dan Consulting dalam pengembangan formulasi makanan dan minuman serbuk. Berdiri sejak tahun 2014 di Jakarta, PT. Sinergi Abadi Sentosa dibangun sebagai bentuk urgensi dari industri minuman serbuk dengan produk lokal yang dapat bersaing secara global.')
const icons = ref([
  {
    icon: 'mdi-facebook',
    link: ''
  },
  {
    icon: 'mdi-twitter',
    link: ''
  },
  {
    icon: 'mdi-linkedin',
    link: ''
  },
  {
    icon: 'mdi-instagram',
    link: ''
  },
]);
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
]);
</script> -->