<template>
  <main class="app">
    <div class="container">
      <div class="relative">
        <PartialsPartialBio />
        <PartialsPartialContent />
        <p class="mt-auto text-[10px] opacity-60 lg:hidden text-center mb-16">Develop with ☕ and 🎧</p>
        <div
          class="absolute lg:fixed top-32 -left-28 w-72 h-72 z-10 bg-gradient-to-r from-primary to-secondary blur-[50px] opacity-10">
        </div>
        <svg class="pointer-events-none fixed isolate z-50 top-0 left-0 opacity-70 mix-blend-soft-light" width="100%"
          height="100%">
          <filter id="pedroduarteisalegend">
            <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch"></feTurbulence>
          </filter>
          <rect width="100%" height="100%" filter="url(#pedroduarteisalegend)"></rect>
        </svg>
        <div class="fixed top-0 left-0 z-30 w-full h-16 bg-gradient-to-b from-dark to-transparent"></div>
        <div class="fixed bottom-0 left-0 z-30 w-full h-16 bg-gradient-to-t from-dark to-transparent"></div>
      </div>
    </div>
  </main>
</template>

<script setup>
</script>
