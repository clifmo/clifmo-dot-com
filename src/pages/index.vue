<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="py-12 px-6 md:py-24 bg-gray-200 dark:bg-gray-800 relative z-10">
    <div class="container max-w-6xl mx-auto text-left items-center flex md:flex-row-reverse flex-wrap">
      <div class="w-full pb-12 md:block md:w-1/3">
        <img src="/clif.jpg" class="w-2/3 md:w-full mx-auto block  shadow-lg shadow-gray-500/40 dark:shadow-none rounded-3xl">
      </div>
      <div class="w-full md:w-2/3 text-center md:text-left md:pr-4">
        <h1 class="text-center md:text-left text-2xl md:text-4xl text-grey-darkest mb-6">
          {{ t('hero.heading') }}
        </h1>
        <p class="md:text-left text-sm md:text-md text-grey-dark leading-normal mb-6 md:mb-3">
          {{ t('hero.sentence-1') }}
        </p>
        <p class="md:text-left text-sm md:text-md text-grey-dark leading-normal mb-6 md:mb-3">
          {{ t('hero.sentence-2') }}
        </p>
        <p class="md:text-left text-sm md:text-md text-grey-dark leading-normal mb-6 md:mb-3">
          {{ t('hero.sentence-3') }}
        </p>
        <p class="md:text-left text-sm md:text-md text-grey-dark leading-normal mb-6 md:mb-3">
          {{ t('hero.sentence-4') }}
        </p>
        <div class="w-full mt-12 mb-6 text-center md:text-left">
          <a href="/background" class="btn-salmon">{{ t('button.contact_me') }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
