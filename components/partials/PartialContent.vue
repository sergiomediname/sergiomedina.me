<template>
  <section class="static z-20 lg:absolute lg:right-0 lg:max-w-[536px] xl:max-w-[634px] pb-16 lg:py-16">
    <div class="flex flex-col gap-8">
      <CardWorkCard v-for="work in data" :key="work.id" :work="work" />
    </div>
  </section>
</template>

<script setup>
import data from '@/data/work.json'
</script>
