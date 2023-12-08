<template>
  <div class="layout">
    <header></header>
    <main>
      <svg class="pointer-events-none fixed isolate z-50 opacity-80 mix-blend-soft-light" width="100%" height="100%">
        <filter id="filterEffect">
          <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch"></feTurbulence>
        </filter>
        <rect width="100%" height="100%" filter="url(#filterEffect)"></rect>
      </svg>
      <div class="fixed z-30 top-0 left-0 right-0 h-16 bg-gradient-to-b from-zinc-950 to-zinc-950/0"></div>
      <div class="fixed z-30 bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-zinc-950 to-zinc-950/0"></div>
      <slot />
    </main>
  </div>
</template>
