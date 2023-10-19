<template>
  <div class="flex items-center gap-8 mt-16 lg:mt-24">
    <a class="flex items-center gap-2 hover:text-highlight transition-colors duration-200"
      href="https://es.linkedin.com/in/sergiomedina-me" target="_blank">
      <IconsIconLinkedin />
      <span>LinkeIn</span>
    </a>
    <a class="flex items-center gap-2 hover:text-highlight transition-colors duration-200"
      href="https://github.com/sergiomediname" target="_blank">
      <IconsIconGithub />
      <span>Github</span>
    </a>
    <a class="flex items-center gap-2 hover:text-highlight transition-colors duration-200" :href="mailTo"
      @click="showEmail">
      <IconsIconEmail />
      <span>{{ emailValue }}</span>
    </a>
  </div>
</template>

<script setup>
const emailValue = ref('Email')
const mailTo = ref('#')
const showEmail = () => {
  emailValue.value = 'sergiomedina.me@gmail.com'
  mailTo.value = 'mailto:sergiomedina.me@gmail.com'
}
</script>
