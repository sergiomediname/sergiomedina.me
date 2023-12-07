<template>
  <div class="col-span-12 lg:col-span-6 lg:col-start-7 group/works">
    <div class="items flex flex-col gap-6 lg:gap-8">
      <CardWork v-for="work in works" :key="work.id" :data="work" />
    </div>
  </div>
</template>

<script setup>
import CardWork from '@/components/CardWork.vue'

const works = [
  {
    id: 'boutique-la-torre-del-canonigo',
    title: 'Boutique La Torre del Canonigo',
    description: 'Informative landing page to present a group of fashion stores in Barcelona',
    url: 'https://boutiquelatorredelcanonigo.com/',
    stack: ['Nuxt', 'TailwindCSS'],
    type: 'Landing'
  },
  {
    id: 'carola-monje',
    title: 'Carola Monje',
    description: 'Online shop for the clothing collection by Carola Monje.',
    url: 'https://carolamonje.com/',
    stack: ['Shopify', 'SASS'],
    type: 'Ecommerce'
  },
  {
    id: 'awakesenses',
    title: 'Awakesenses',
    description: 'Online and in-person Yoga and Mindfulness classes website.',
    url: 'https://www.awakesenses.com/',
    stack: ['Wordpress'],
    type: 'Corporative'
  }
]
</script>
