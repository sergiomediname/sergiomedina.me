<template>
  <div
    class="p-[1px] relative bg-gradient-to-t from-zinc-950 to-neutral-800 rounded-lg overflow-hidden before:absolute before:inset-0 before:z-10 before:opacity-0 before:bg-gradient-to-tr before:from-accent before:to-alter before:animate-gradient before:bg-gradient transition-all duration-200 before:duration-500 hover:before:opacity-100 hover:!opacity-100 group-hover/works:opacity-50">
    <div
      class="absolute bg-gradient-card hover:scale-[2] hover:opacity-10 opacity-[0.03] scale duration-300 inset-0 z-30">
    </div>
    <div class="relative z-20 p-8 lg:p-10 bg-zinc-950 rounded-lg flex flex-col gap-4">
      <p class="uppercase text-sm leading-none text-neutral-500">{{ data.type }}</p>
      <h2 class="font-bold text-2xl text-highlight">{{ data.title }}</h2>
      <p class="text-md">{{ data.description }}</p>
      <div class="flex items-center gap-2">
        <span v-for="stack in data.stack" :key="stack"
          class="border border-neutral-800/50 bg-neutral-800/30 py-2 px-3 rounded-full uppercase text-sm leading-none text-neutral-500">{{
            stack
          }}</span>
      </div>
    </div>
    <a :href="data.url" target="_blank" class="absolute inset-0 z-30" aria-label="Visit website"></a>
  </div>
</template>

<script setup>
defineProps(['data'])
</script>
