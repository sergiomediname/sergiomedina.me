<template>
    <header class="header main-width">
        <div class="wrapp flex items-center px-20 py-4 justify-between">
            <div>
                <p class="text-base">
                    <NuxtLink to="/">{ sergiomedina }</NuxtLink>
                </p>
            </div>
            <nav>
                <ul class="flex items-center gap-6">
                    <li><NuxtLink to="/bio/">Know more</NuxtLink></li>
                    <li>
                        <a href="mailto:hello@sergiomedina.me"
                            >hello@sergiomedina.me</a
                        >
                    </li>
                    <li><DarkMode /></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup>
import DarkMode from "@/components/global/DarkMode.vue";
</script>
