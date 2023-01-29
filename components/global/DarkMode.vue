<template>
    <button class="switch-darkmode block">
        <span v-if="color_mode.value === 'light'" @click="changeMode('dark')"
            ><iMoon
        /></span>
        <span v-else @click="changeMode('light')"> <iSun /></span>
    </button>
</template>

<script setup>
import iSun from "@/components/Icons/iSun.vue";
import iMoon from "@/components/Icons/iMoon.vue";

const color_mode = useColorMode();

const changeMode = (theme) => {
    color_mode.preference = theme;
};
</script>
