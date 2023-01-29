<template>
    <article class="relative aspect-[4/3] overflow-hidden">
        <a :href="data.slug" target="_blank"
            ><img
                :src="data.img"
                :alt="data.title"
                :title="data.title"
                class="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-full h-full object-cover"
        /></a>
    </article>
</template>

<script setup>
defineProps(["data"]);
</script>
