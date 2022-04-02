<script setup lang="ts">
const { t } = useI18n()

const myColors = ['#1f77b4', '#629fc9', '#94bedb', '#c9e0ef'];
const skills = [{
          "name": "Groovy",
          "value": 26
        },
        {
          "name": "Java",
          "value": 22
        },
        {
          "name": "C#",
          "value": 24
        },
        {
          "name": "PowerShell",
          "value": 14
        },
        {
          "name": "TypeScript",
          "value": 12
        },
        {
          "name": "YAML",
          "value": 9
        },
        {
          "name": "PL/SQL",
          "value": 9
        },
        {
          "name": "SQL",
          "value": 9
        },
        {
          "name": ".NET",
          "value": 6
        },
        {
          "name": "Selenium",
          "value": 6
        },
        {
          "name": "Azure Pipelines SDK",
          "value": 6
        },
        {
          "name": "Azure DevOps REST API",
          "value": 6
        },
        {
          "name": "Node.js",
          "value": 6
        },
        {
          "name": "Katalon Studio",
          "value": 6
        },
        {
          "name": "Apache JMeter",
          "value": 6
        },
        {
          "name": "VS Code",
          "value": 6
        },
        {
          "name": "Visual Studio",
          "value": 6
        },
        {
          "name": "Oracle Database",
          "value": 6
        },
        {
          "name": "SQLite",
          "value": 6
        },
        {
          "name": "IntelliJ IDEA",
          "value": 6
        },
        {
          "name": "Git",
          "value": 6
        },
        {
          "name": "NPM",
          "value": 6
        },
        {
          "name": "IIS",
          "value": 6
        },
        {
          "name": "Windows",
          "value": 6
        },
        {
          "name": "WSL",
          "value": 6
        }
      ];
</script>

<template>
  <div class="py-12 px-6 md:py-24 bg-gray-200 dark:bg-gray-800 relative z-10">
    <div class="container max-w-6xl mx-auto text-left items-center flex md:flex-row-reverse flex-wrap">
      <div class="w-full pb-12 md:block md:w-1/3">
        <img src="/clif.jpg" class="w-2/3 md:w-full mx-auto block  shadow-lg shadow-gray-500/40 dark:shadow-none rounded-3xl">
      </div>
      <div class="w-full md:w-2/3 text-center md:text-left md:pr-4">
        <h1 class="text-center md:text-left text-2xl md:text-4xl text-grey-darkest mb-6">
          Me in 10 Seconds
        </h1>
        <p class="md:text-left text-sm md:text-md text-grey-dark leading-normal mb-6 md:mb-3">
          I've been an <a href="https://azure.microsoft.com/en-us/services/devops/pipelines/" title="Microsoft Azure Pipelines" class="no-underline" target="_blank" rel="noopener noreferrer">Azure Pipelines</a> automation engineer. I currently manage a team of Test Automation engineers using <a title="Katalon Studio Test Automation Framework" href="https://katalon.com" class="not-prose no-underline" target="_blank" rel="noopener noreferrer">Katalon Studio</a>. 
        </p>
        <p class="md:text-left text-sm md:text-md text-grey-dark leading-normal mb-6 md:mb-3">
          I've been a Laravel artisan, a .NET engineer, and WooCommerce ninja, and Drupal developer.
        </p>
        <p class="md:text-left text-sm md:text-md text-grey-dark leading-normal mb-6 md:mb-3">
          I'm a Florida native, a life-long <a title="University of Florida Gators" class="no-underline" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Florida_Gators">Florida Gator</a>, and&nbsp;a proud employee of&nbsp;<a title="R+L Carriers | Freight shipping and logistics company" class="no-underline" href="https://en.wikipedia.org/wiki/R%2BL_Carriers">R+L Carriers</a>.
        </p>
        <p class="md:text-left text-sm md:text-md text-grey-dark leading-normal mb-6 md:mb-3">
          I've worked to promote <a title="YouImpact Victim Impact Panel" class="no-underline" target="_blank" rel="noopener noreferrer" href="https://youimpact.com">DUI awareness</a>, solve <a title="Voices of Change Animal League" class="no-underline" href="https://www.vocalforpets.org/">pet homelessness</a>, and earn time in the <a title="Ocala Yoga Center" class="no-underline" href="http://ocalayogacenter.com/">yoga studio</a>.
        </p>
        <div class="w-full mt-12 mb-6 text-center md:text-left">
          <a href="/background" class="btn-salmon">{{t('button.contact_me')}}</a>
        </div>
      </div>
    </div>

    
  </div>
  <div class="py-12 px-6 md:py-24 bg-gray-200 dark:bg-gray-400 relative z-10">
    <div class="container">
      <div class="w-full">
        <h3 class="text-2xl md:text-4xl text-grey-darkest mb-6">
          Tools &amp; Frameworks
        </h3>
      </div>
      <WC
        class=""
        :data="skills"
        nameKey="name"
        valueKey="value"
        :color="myColors"
      >
        </WC>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
