<script setup>
// import LoginPage from './views/Auth/LoginPage.vue'

console.log(import.meta.env.VITE_GOOGLE_CLIENT_ID)
</script>

<template>
    <router-view />
</template>

<style scoped>

header {
    line-height: 1.5;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
}
</style>
