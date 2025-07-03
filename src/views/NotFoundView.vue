<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="flex flex-col items-center justify-center h-screen">
        <h1 class="text-4xl font-bold">404</h1>
        <p class="text-2xl">Page Not Found</p>
        <RouterLink to="/">Go to Home</RouterLink>
    </div>
</template>