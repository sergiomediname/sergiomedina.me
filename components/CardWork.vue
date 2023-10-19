<template>
  <div
    class="p-[1px] relative bg-gradient-to-t from-zinc-950 to-neutral-800 rounded-lg overflow-hidden before:absolute before:inset-0 before:z-10 before:opacity-0 before:bg-gradient-to-tr before:from-accent before:to-alter before:animate-gradient before:bg-gradient before:transition-all before:duration-500 hover:before:opacity-100">
    <div
      class="absolute test hover:scale-[2] hover:opacity-10 opacity-[0.03] scale transition-all duration-300 inset-0 z-30">
    </div>
    <div class="relative z-20 p-8 lg:p-10 bg-zinc-950 rounded-lg flex flex-col gap-4">
      <p class="uppercase text-sm text-neutral-500">{{ data.type }}</p>
      <h2 class="font-bold text-2xl text-highlight">{{ data.title }}</h2>
      <p class="text-md">{{ data.description }}</p>
      <div class="flex items-center gap-2">
        <span v-for="stack in data.stack" :key="stack"
          class="border border-neutral-800 p-2 rounded uppercase text-sm text-neutral-500">{{
            stack
          }}</span>
      </div>
    </div>
    <a :href="data.url" target="_blank" class="absolute inset-0 z-30"></a>
  </div>
</template>

<script setup>
defineProps(['data'])
</script>

<style>
.test {
  background-image: radial-gradient(40% 128px at 50% 0, hsl(0, 0%, 100%), transparent);
  /* background-image: radial-gradient(40% 128px at 50% 0, hsla(0, 0%, 100%, 100), transparent); */
}
</style>
