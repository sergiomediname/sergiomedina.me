<template>
  <article
    class="relative p-[2px] rounded-[4px] before:absolute before:inset-0 before:z-10 before:rounded-[4px] before:bg-gradient-to-tr before:from-primary before:to-secondary before:bg-[length:300%_300%] before:animate-gradient before:transition-all before:duration-200 before:opacity-0 hover:before:opacity-100">
    <div class="relative z-20 p-8 lg:p-10 bg-[#141414] rounded-[4px]">
      <p class="text-[12px] leading-[12px] text-alt uppercase">{{ work.category }}</p>
      <h2 class="text-highlight font-bold text-[20px] leading-[33px] mt-4">{{ work.title }}</h2>
      <p class="text-[14px] leading-[21px] mt-4">{{ work.description }}</p>
      <div class="flex items-center gap-4 mt-4">

        <span v-for="stack in work.stacks" :key="stack"
          class="text-[12px] leading-[12px] text-alt uppercase p-2 border border-alt rounded-[4px]">{{ stack }}</span>
      </div>
    </div>
    <a class="absolute inset-0 z-30" :href="work.url" target="_blank"></a>
  </article>
</template>

<script setup>
defineProps(['work'])
</script>
