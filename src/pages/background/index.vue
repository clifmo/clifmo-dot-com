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
            Manager, Test Automation Architect/DevOps
          </h2>
        </div>

        <div class="font-light text-lg px-2 mb-12">
          <h2 class="text-xl font-semibold mb-4">
            {{ t('footer.contact') }}
          </h2>
          <div class="flex items-center my-3">
            <div class="i-carbon-email mr-2" />

            <a href="mailto:ClifMo@ClifMo.com">ClifMo@ClifMo.com</a>
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
            <div class="i-carbon-logo-twitter mr-2" />
            <a href="https://twitter.com/ClifMo" target="_blank" rel="noopener noreferrer">@ClifMo</a>
          </div>
          <div class="flex items-center my-3">
            <div class="i-carbon-globe mr-2" />
            <a href="https://ClifMo.com" target="_blank" rel="noopener noreferrer">Portfolio</a>
          </div>
        </div>

        <div class="font-light text-lg px-2 mb-12">
          <h2 class="text-xl font-semibold mb-4">
            Professional Experience
          </h2>
          <ul class="list-none">
            <li>
              <label for="js-skill">Dynamic languages</label>
              <div class="w-full bg-slate-200 rounded-full h-2.5 dark:bg-slate-300">
                <div class="bg-desertsun h-2.5 rounded-full w-80%" />
              </div>
            </li>
            <li>
              <label for="react-skill">Web development</label>
              <div class="w-full bg-slate-200 rounded-full h-2.5 dark:bg-slate-300">
                <div class="bg-desertsun h-2.5 rounded-full w-90%" />
              </div>
            </li>
            <li>
              <label for="nextjs-skill">CI/CD paradigms</label>
              <div class="w-full bg-slate-200 rounded-full h-2.5 dark:bg-slate-300">
                <div class="bg-desertsun h-2.5 rounded-full w-75%" />
              </div>
            </li>
            <li>
              <label for="vue-skill">Static languages</label>
              <div class="w-full bg-slate-200 rounded-full h-2.5 dark:bg-slate-300">
                <div class="bg-desertsun h-2.5 rounded-full w-60%" />
              </div>
            </li>
            <li>
              <label for="eleventy-skill">Interpreted languages</label>
              <div class="w-full bg-slate-200 rounded-full h-2.5 dark:bg-slate-300">
                <div class="bg-desertsun h-2.5 rounded-full w-70%" />
              </div>
            </li>
            <li>
              <div>Professional Tools</div>
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
              <div>Extra Skills</div>
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
            Education
          </h2>
          <h6 class="font-semibold">
            B.S. Computer Science
          </h6>
          <p>2006 University of Florida</p>
          <hr class="mt-3 mb-3 opacity-10">
          <h6 class="font-semibold">
            International Baccalaureate
          </h6>
          <p>2001 Pensacola High School</p>
        </div>

        <div class="font-light text-lg px-2 mb-12">
          <h3 class="text-lg font-semibold mb-4">
            First Job
          </h3>
          <h6 class="text-md font-semibold">
            Chick-fil-A
          </h6>
          <p>Night Manager</p>
        </div>
      </div>
      <div class="content w-full p-12 dark:bg-slate-700">
        <div id="experience" class="prose">
          <h2 class="section-headline">
            R+L Carriers
          </h2>
          <section class="mb-6">
            <div class="lg:inline-block lg:w-1/3 lg:align-top italic mb-2">
              September 2013 &ndash; Present
            </div>
          </section>
          <div>
            <h3>
              Manager, Test Automation Architect/DevOps
            </h3>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                2020 &ndash; Present
              </div>
              <div class="lg:inline-block lg:w-9/12 w-full md:text-left">
                Hired and trained a team of 7 software engineers in test within a 50-person quality department
              </div>
            </section>
            <section class="mb-3 text-center items-center">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Accomplishments
              </div>
              <div class="lg:inline-block lg:w-9/12 w-full mt-0 py-0 not-prose  md:text-left items-center">
                Responsible for smoke, sanity, regression, integration and performance test automation for critical operations applications.
              </div>
            </section>
            <section class="mb-6 text-center items-center">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2" />
              <div class="lg:inline-block lg:w-9/12 w-full mt-0 py-0 not-prose  md:text-left items-center">
                <span>Engineered CI/CD tooling, build and release pipelines and micro-service architecture to support test agility.</span>
              </div>
            </section>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Tools
              </div>
              <div class="lg:inline-block lg:w-9/12 w-full">
                <span resume-tool>Katalon Studio</span>
                <span resume-tool>Azure DevOps Server</span>
                <span resume-tool>Apache JMeter</span>
              </div>
            </section>
          </div>
        </div>
        <div id="projects" class="prose">
          <div class="mb-16">
            <h3 class="pl-7">
              Lead Automation Engineer
            </h3>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                2018 &ndash; 2020
              </div>
              <div class="lg:inline-block lg:w-9/12 w-full md:text-left">
                Engineered CI/CD tooling using Azure Pipelines SDK supporting .NET, Oracle and TIBCO deployments for a department 100 developers.
              </div>
            </section>
            <section class="mb-3">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Accomplishments
              </div>
              <div class="lg:inline-block lg:w-9/12 w-full mt-0 py-0 not-prose md:text-left">
                Responsible for first deployments of critical operations applications using automation.
              </div>
            </section>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2" />
              <div class="lg:inline-block lg:w-9/12 w-full mt-0 py-0 not-prose md:text-left">
                Developed department standards and documentation for source control workflow, CI/CD, and Git.
              </div>
            </section>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Tools
              </div>
              <div class="lg:inline-block lg:w-9/12 w-full">
                <span resume-tool>.NET Framework</span>
                <span resume-tool>Azure Pipeline Tasks SDK</span>
                <span resume-tool>Powershell</span>
              </div>
            </section>
          </div>
        </div>
        <div id="projects" class="prose">
          <div class="mb-16">
            <h3 id="chrisko-headline">
              Lead Full-Stack Developer
            </h3>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                2014 - 2018
              </div>
              <div class="lg:inline-block lg:w-9/12 w-full md:text-left">
                Internal start-up agency providing web and e-commerce solutions to freight clients.
              </div>
            </section>
            <section class="mb-3">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Accomplishments
              </div>
              <div class="lg:inline-block lg:w-9/12 w-full mt-0 py-0 not-prose md:text-left">
                Lead developer of R+L Carriers Shipping Rates extension for WordPress.
              </div>
            </section>
            <section class="mb-3">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2" />
              <div class="lg:inline-block lg:w-9/12 w-full mt-0 py-0 not-prose md:text-left">
                Lead developer of YouImpact DUI Victim Awareness video e-learning platform.
              </div>
            </section>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2" />
              <div class="lg:inline-block lg:w-9/12 w-full mt-0 py-0 not-prose md:text-left">
                Lead developer of Navalimpianti USA, Inc cruise line compliance and safety app.
              </div>
            </section>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Tools
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
            Public Sector
          </h2>
          <section class="mb-6">
            <div class="lg:inline-block lg:w-1/3 lg:align-top italic mb-2">
              2007 &ndash; 2014
            </div>
          </section>
          <div>
            <h3>
              Escambia County Board of County Commissioners
            </h3>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Web IT Coordinator
              </div>
              <div class="lg:inline-block lg:w-9/12 w-full md:text-left">
                Coordinated with the board, 25 departments and contractors to relaunch MyEscambia.com.
              </div>
            </section>
            <section class="mb-3">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Accomplishments
              </div>
              <div class="lg:inline-block lg:w-9/12 w-full mt-0 py-0 not-prose md:text-left">
                Developed API integrations to county services for Public Works and Animal Shelter departments.
              </div>
            </section>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2" />
              <div class="lg:inline-block lg:w-9/12 w-full mt-0 py-0 not-prose md:text-left">
                Coordinated with the Public Information Officer to customize a CMS backend.
              </div>
            </section>
          </div>
          <div>
            <h3>
              City of Pensacola
            </h3>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Webmaster
              </div>
              <div class="lg:inline-block lg:w-9/12 w-full md:text-left">
                Designed web front-ends and developed backend integrations to city services.
              </div>
            </section>
            <section class="mb-3">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Accomplishments
              </div>
              <div class="lg:inline-block lg:w-9/12 w-full mt-0 py-0 not-prose md:text-left">
                Employee of the Month &ndash; August 2010
              </div>
            </section>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2" />
              <div class="lg:inline-block lg:w-9/12 w-full mt-0 py-0 not-prose md:text-left">
                Relaunched Pensacola International Airport, City of Pensacola and Pensacola Police Department websites.
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
