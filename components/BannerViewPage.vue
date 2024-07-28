<template>
    <v-card max-height="200px" color="teal-darken-4">
        <v-card-text class="mt-10 mb-10">
            <div class="text-center text-h6 font-weight-black">{{ text }}</div>
            <div class="text-center mt-5">
                <v-btn color="teal-lighten-5" variant="outlined" :to="btnurl">{{ btntext }}</v-btn>
            </div>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        btntext: {
            type: String,
            required: true
        },
        btnurl: {
            type: String,
            required: true
        }
    },
}
</script>