<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <nav class="w-full px-6 relative z-20">
    <div class="container max-w-6xl mx-auto h-10 md:h-16 flex items-center justify-between">
      <span class="w-2/6 dark:text-tan">
        <a href="/" class="text-sm md:text-2xl">Clifton Molina</a>
      </span>
      <div class="w-2/6 pt-12 md:pt-18">
        <a href="/" class="block w-18 md:w-26 rounded-full overflow-hidden mx-auto ">
          <img src="/m-logo.png" class="w-full h-full">
        </a>
      </div>
      <span class="w-2/6 md:text-right">
        <a href="/" class="dark:text-tan text-xs md:text-2xl whitespace-nowrap">{{ t('nav.sw_engineer') }}</a>
      </span>
    </div>
  </nav>
</template>
