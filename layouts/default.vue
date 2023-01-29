<template>
    <div class="layout">
        <HeaderNav />
        <main class="main">
            <slot />
        </main>
    </div>
</template>

<script setup>
import HeaderNav from "@/components/global/HeaderNav.vue";
</script>
