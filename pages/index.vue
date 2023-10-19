<template>
  <div class="container grid grid-cols-12 gap-8 relative py-16">
    <!-- Content -->
    <div class="relative col-span-12 lg:col-span-5">
      <div class="lg:sticky lg:top-16 lg:left-0">
        <BlurredCircle />
        <ContentBio />
        <SocialList />
      </div>
    </div>

    <!-- Sidebar -->
    <WorkList />
  </div>
</template>

<script setup>
import BlurredCircle from '@/components/BlurredCircle.vue'
import ContentBio from '@/components/ContentBio.vue'
import SocialList from '@/components/SocialList.vue'
import WorkList from '@/components/WorkList.vue'
</script>
