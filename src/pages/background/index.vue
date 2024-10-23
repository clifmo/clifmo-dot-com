<template>
  <div class="container mx-auto max-w-screen-xl mb-20 md:mt-20">
    <main
      id="wrapper"
      class="flex flex-col sm:flex-row-reverse sm:m-12 shadow-2xl shadow-black-500/40 dark:shadow-none"
    >
      <div
        id="sidebar"
        class="w-full sm:max-w-sm p-8 bg-gradient-to-b from-slate-300 via-slate-100 to-white dark:from-white dark:to-slate-300 dark:text-slate-700 pt-15"
      >
        <div class="px-2 mb-12">
          <img
            src="/clifmo-toon.jpg"
            alt="Profile Picture"
            class="rounded-full w-64 mx-auto mb-2"
          >
          <h1 class="text-center text-3xl font-semibold mb-2">
            Clifton Molina
          </h1>
          <h2 class="text-center text-xl font-light">
            {{ t('resume.bio.job-title') }}
          </h2>
        </div>

        <div class="font-light text-lg px-2 mb-12">
          <h2 class="text-xl font-semibold mb-4">
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

        <div class="font-light text-lg px-2 mb-12">
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
            <a href="https://ClifMo.com" target="_blank" rel="noopener noreferrer">Portfolio</a>
          </div>
        </div>

        <div class="font-light text-lg px-2 mb-12">
          <h2 class="text-xl font-semibold mb-4">
            {{ t('resume.experience.title') }}
          </h2>
          <ul class="list-none">
            <li>
              <label for="js-skill">{{ t('resume.experience.dynamic-languages') }}</label>
              <div class="w-full bg-slate-200 rounded-full h-2.5 dark:bg-slate-300">
                <div class="bg-desertsun h-2.5 rounded-full w-80%" />
              </div>
            </li>
            <li>
              <label for="react-skill">{{ t('resume.experience.web-development') }}</label>
              <div class="w-full bg-slate-200 rounded-full h-2.5 dark:bg-slate-300">
                <div class="bg-desertsun h-2.5 rounded-full w-90%" />
              </div>
            </li>
            <li>
              <label for="nextjs-skill">{{ t('resume.experience.ci-cd-paradigms') }}</label>
              <div class="w-full bg-slate-200 rounded-full h-2.5 dark:bg-slate-300">
                <div class="bg-desertsun h-2.5 rounded-full w-75%" />
              </div>
            </li>
            <li>
              <label for="vue-skill">{{ t('resume.experience.static-languages') }}</label>
              <div class="w-full bg-slate-200 rounded-full h-2.5 dark:bg-slate-300">
                <div class="bg-desertsun h-2.5 rounded-full w-60%" />
              </div>
            </li>
            <li>
              <label for="eleventy-skill">{{ t('resume.experience.interpreted-languages') }}</label>
              <div class="w-full bg-slate-200 rounded-full h-2.5 dark:bg-slate-300">
                <div class="bg-desertsun h-2.5 rounded-full w-70%" />
              </div>
            </li>
            <li>
              <div>{{ t('resume.experience.professional-tools') }}</div>
              <p class="leading-8">
                <span resume-tool>Groovy</span>
                <span resume-tool>PowerShell</span>
                <span resume-tool>YAML</span>
                <span resume-tool>.NET</span>
                <span resume-tool>IIS 10</span>
                <span resume-tool>Azure DevOps</span>
                <span resume-tool>Oracle</span>
                <span resume-tool>TIBCO</span>
              </p>
            </li>
            <li>
              <div>{{ t('resume.experience.extra-skills') }}</div>
              <p class="leading-8">
                <span resume-tool>TypeScript</span>
                <span resume-tool>PHP</span>
                <span resume-tool>Bash</span>
                <span resume-tool>Proxmox</span>
                <span resume-tool>Alpine Linux</span>
                <span resume-tool>K3s</span>
                <span resume-tool>Docker</span>
                <span resume-tool>MariaDB</span>
              </p>
            </li>
          </ul>
        </div>

        <div class="font-light text-lg px-2 mb-12">
          <h2 class="text-xl font-semibold mb-4">
            {{ t('resume.education.education') }}
          </h2>
          <h6 class="font-semibold">
            {{ t('resume.education.b-s-computer-science') }}
          </h6>
          <p>{{ t('resume.education.2006-university-of-florida') }}</p>
          <hr class="mt-3 mb-3 opacity-10">
          <h6 class="font-semibold">
            {{ t('resume.education.international-baccalaureate') }}
          </h6>
          <p>{{ t('resume.education.2001-pensacola-high-school') }}</p>
        </div>

        <div class="font-light text-lg px-2 mb-12">
          <h3 class="text-lg font-semibold mb-4">
            {{ t('resume.bio.first-job.title') }}
          </h3>
          <h6 class="text-md font-semibold">
            Chick-fil-a
          </h6>
          <p>{{ t('resume.bio.first-job.night-manager') }}</p>
        </div>
      </div>
      <div class="content w-full p-6 md:p-12 dark:bg-slate-700">
        <div id="experience" class="prose">
          <h2 class="section-headline">
            {{ t('resume.experience.r-l-carriers') }}
          </h2>
          <section class="mb-6">
            <div class="lg:inline-block lg:w-1/3 lg:align-top italic mb-2">
              {{ t('resume.experience.2013') }} &ndash; {{ t('resume.experience.present') }}
            </div>
          </section>
          <div>
            <h3>
              {{ t('resume.bio.job-title') }}
            </h3>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                {{ t('resume.experience.2020') }} &ndash; {{ t('resume.experience.present') }}
              </div>
              <div class="lg:inline-block lg:w-9/12 w-full md:text-left">
                {{ t('resume.experience.summary1') }}
              </div>
            </section>
            <section class="mb-3 text-center items-center">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                
              </div>
              <div class="lg:inline-block lg:w-9/12 w-full mt-0 py-0 not-prose  md:text-left items-center">
                {{ t('resume.experience.detail1') }}
              </div>
            </section>
            <section class="mb-6 text-center items-center">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2" />
              <div class="lg:inline-block lg:w-9/12 w-full mt-0 py-0 not-prose  md:text-left items-center">
                {{ t('resume.experience.detail2') }}
              </div>
            </section>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                
              </div>
              <div class="lg:inline-block lg:w-9/12 w-full">
                <span resume-tool>Selenium</span>
                <span resume-tool>Groovy</span>
                <span resume-tool>Azure</span>
                <span resume-tool>VS Code</span>
                <span resume-tool>Appium</span>
              </div>
            </section>
          </div>
        </div>
        <div id="projects" class="prose">
          <div class="mb-16">
            <h3 class="pl-7">
              {{ t('resume.experience.lead-automation-engineer') }}
            </h3>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                {{ t('resume.experience.2018') }} &ndash; {{ t('resume.experience.2020') }}
              </div>
              <div class="lg:inline-block lg:w-9/12 w-full md:text-left">
                {{ t('resume.experience.summary2') }}
              </div>
            </section>
            <section class="mb-3">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                
              </div>
              <div class="lg:inline-block lg:w-9/12 w-full mt-0 py-0 not-prose md:text-left">
                {{ t('resume.experience.detail3') }}
              </div>
            </section>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2" />
              <div class="lg:inline-block lg:w-9/12 w-full mt-0 py-0 not-prose md:text-left">
                {{ t('resume.experience.detail4') }}
              </div>
            </section>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                
              </div>
              <div class="lg:inline-block lg:w-9/12 w-full">
                <span resume-tool>DOTNET</span>
                <span resume-tool>Azure Pipeline SDK</span>
                <span resume-tool>Powershell</span>
                <span resume-tool>TypeScript</span>
                <span resume-tool>YAML</span>
              </div>
            </section>
          </div>
        </div>
        <div id="projects" class="prose">
          <div class="mb-16">
            <h3 id="chrisko-headline">
              {{ t('resume.experience.lead-full-stack-developer') }}
            </h3>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                {{ t('resume.experience.2014') }} &ndash; {{ t('resume.experience.2018') }}
              </div>
              <div class="lg:inline-block lg:w-9/12 w-full md:text-left">
                {{ t('resume.experience.summary3') }}
              </div>
            </section>
            <section class="mb-3">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                
              </div>
              <div class="lg:inline-block lg:w-9/12 w-full mt-0 py-0 not-prose md:text-left">
                {{ t('resume.experience.detail5') }}
              </div>
            </section>
            <section class="mb-3">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2" />
              <div class="lg:inline-block lg:w-9/12 w-full mt-0 py-0 not-prose md:text-left">
                {{ t('resume.experience.detail6') }}
              </div>
            </section>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2" />
              <div class="lg:inline-block lg:w-9/12 w-full mt-0 py-0 not-prose md:text-left">
                {{ t('resume.experience.detail7') }}
              </div>
            </section>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                
              </div>
              <div class="lg:inline-block lg:w-9/12 w-full">
                <span resume-tool>Laravel</span>
                <span resume-tool>WordPress</span>
                <span resume-tool>Nginx</span>
                <span resume-tool>MariaDB Galera</span>
                <span resume-tool>GlusterFS</span>
              </div>
            </section>
          </div>
        </div>
        <hr class="mt-8 mb-12">
        <div id="experience" class="prose">
          <h2 class="section-headline">
            {{ t('resume.experience.public-sector') }}
          </h2>
          <section class="mb-6">
            <div class="lg:inline-block lg:w-1/3 lg:align-top italic mb-2">
              {{ t('resume.experience.2007') }} &ndash; {{ t('resume.experience.2014') }}
            </div>
          </section>
          <div>
            <h3>
              {{ t('resume.experience.escambia-county-board-of-county-commissioners') }}
            </h3>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                {{ t('resume.experience.web-it-coordinator') }}
              </div>
              <div class="lg:inline-block lg:w-9/12 w-full md:text-left">
                {{ t('resume.experience.summary4') }}
              </div>
            </section>
          </div>
          <div>
            <h3>
              {{ t('resume.experience.city-of-pensacola') }}
            </h3>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                {{ t('resume.experience.webmaster') }}
              </div>
              <div class="lg:inline-block lg:w-9/12 w-full md:text-left">
                {{ t('resume.experience.summary5') }}
              </div>
            </section>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2" />
              <div class="lg:inline-block lg:w-9/12 w-full mt-0 py-0 not-prose md:text-left">
                {{ t('resume.experience.detail11') }}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>>

<script setup lang="ts">
const { t } = useI18n()
</script>

<style>
li { margin-bottom: 1em; text-align: left; }
</style>

<route lang="yaml">
meta:
  layout: home
</route>
