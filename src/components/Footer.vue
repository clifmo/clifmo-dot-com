<script setup lang="ts">
import { toggleDark } from '~/composables'

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <footer class="w-full bg-white dark:bg-gray-900">
    <div class="container mx-auto max-w-xl h-full flex flex-wrap md:flex-no-wrap justify-between items-start text-sm p-6 pt-8 pb-4">
      <div class="text-lg px-2 mb-12 mx-auto md:mx-0">
        <h2 class="text-xl font-semibold mb-4 text-center md:text-left">
          {{ t('footer.contact') }}
        </h2>
        <div class="flex items-center my-3">
          <div class="i-carbon-email mr-2" />

          <a href="mailto:clifmo@gmail.com">clifmo@gmail.com</a>
        </div>
        <div class="flex items-center my-3">
          <div class="i-carbon-phone mr-2" />
          <a href="tel:8505010796">(850) 501-0796</a>
        </div>
        <div class="flex items-center my-3">
          <div class="i-carbon-home mr-2" />
          <p>Ocala, Florida, USA</p>
        </div>
      </div>

      <div class="text-lg px-2 mb-12 mx-auto md:mx-0">
        <h2 class="text-xl font-semibold mb-4">
          {{ t('footer.on-the-web') }}
        </h2>
        <div class="flex items-center my-3">
          <div class="i-carbon-logo-github mr-2" />
          <a href="https://github.com/ClifMo" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <div class="flex items-center my-3">
          <div class="i-carbon-logo-linkedin mr-2" />
          <a href="https://www.linkedin.com/in/ClifMo/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div class="flex items-center my-3">
          <div class="i-carbon-at mr-2" />
          <a href="https://threads.net/ClifM0" target="_blank" rel="noopener noreferrer">@ClifM0</a>
        </div>
        <div class="flex items-center my-3">
          <div class="i-carbon-globe mr-2" />
          <a href="https://ClifMo.com" target="_blank" rel="noopener noreferrer">{{ t('footer.portfolio') }}</a>
        </div>
      </div>
    </div>
  </footer>
  <nav text-xl mt-6 />
  <nav text-xl mt-6>
    <router-link class="icon-btn mx-2" to="/" :title="t('button.home')">
      <div i-carbon-campsite />
    </router-link>

    <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </button>

    <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales">
      <div i-carbon-language />
    </a>

    <router-link class="icon-btn mx-2" to="/about" :title="t('button.about')">
      <div i-carbon-dicom-overlay />
    </router-link>

    <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank" title="GitHub">
      <div i-carbon-logo-github />
    </a>
  </nav>
  <p text-xs mt-6>
    clifmo.com v0.0.5
  </p>
</template>
