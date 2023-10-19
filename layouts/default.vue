<template>
  <div class="layout">
    <header></header>
    <main>
      <div class="fixed z-30 top-0 left-0 right-0 h-16 bg-gradient-to-b from-zinc-950 to-zinc-950/0"></div>
      <div class="fixed z-30 bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-zinc-950 to-zinc-950/0"></div>
      <slot />
    </main>
  </div>
</template>
