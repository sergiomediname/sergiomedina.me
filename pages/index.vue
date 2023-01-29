<template>
    <section class="content-left main-width flex items-center">
        <div class="wrapp px-content">
            <BioHome />
        </div>
    </section>
    <section class="content-right sidebar-width"><Portfolio /></section>
</template>

<script setup>
import Portfolio from "@/components/Portfolio.vue";
import BioHome from "@/components/Home/BioHome.vue";
</script>
