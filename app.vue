<script setup>
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

import { useAppsStore } from '~/store/apps'
import { useSosmedStore } from '~/store/sosmed'

const store = useAppsStore()
const { metaSeo } = storeToRefs(store)
const storeSosmed = useSosmedStore()
const { wa } = storeToRefs(storeSosmed)
const goToExternalPage = (url) => {
  window.location.href = `whatsapp://send?abid=+${url}&text=Hello%2C%20Sinergi Abadi Sentosa!/`
}
</script>
<template>
  <NuxtLayout>
    <Html lang="en">

    <Head>
      <Meta name="description" :content="`PT. Sinergi Abadi Sentosa-${metaSeo.descriptions}`" />
      <Meta name="keywords" :content="`PT. Sinergi Abadi Sentosa-${metaSeo.keywords}`" />
      <Meta name="title" :content="`PT. Sinergi Abadi Sentosa-${metaSeo.title}`" />
      <Meta name="type" content="Company Profile Perusahaan Maklon" />
      <Meta name="site_name" content="PT. Sinergi Abadi Sentosa" />
    </Head>

    </Html>
    <v-app id="inspire">
      <v-layout>
        <AppBarDekstop v-if="$device.isDesktop" />
        <AppBarMobile v-else />
        <v-main class="bg-grey-lighten-3">
          <NuxtPage />
        </v-main>
        <v-fab color="primary" icon="mdi-whatsapp" class="mb-10 mr-10" location="bottom end" size="64" app appear
          style="position: fixed !important;" @click="goToExternalPage(wa)"/>
        <Footer />
      </v-layout>
    </v-app>
  </NuxtLayout>
</template>