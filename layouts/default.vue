<template>
    <v-app>
        <slot></slot>
    </v-app>
</template>
<script setup>
const route = useRoute()
useHead({
    meta: [
        { property: 'og:title', content: `${route.meta.title}` },
        { property: 'og:type', content: `${route.meta.type}` },
        { property: 'og:site_name', content: `${route.meta.site_name}` },
        { property: 'og:image', content: `${route.meta.image}` },
        { name: 'description', content: `${route.meta.description}` },
        { name: 'keywords', content: `${route.meta.keywords}` },
    ]
})
</script>