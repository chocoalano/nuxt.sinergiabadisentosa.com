<template>
    <v-btn :color="isActive ? '#00695C' : '#263238'" :to="to" density="default">
        <slot></slot>
    </v-btn>
</template>

<script>
export default {
    props: {
        to: {
            type: String,
            required: true
        }
    },
    computed: {
        isActive() {
            return this.$route.path === this.to;
        }
    }
};
</script>