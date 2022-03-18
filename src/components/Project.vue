<script setup lang="ts">
// const props = defineProps({
//   projects: Array,
// })

const projects = [
  { id: 1, name: 'YouImpact Victim Impact Panel', desc: 'Video-based web app used in DUI sentencing in multiple states.', img: '/projects/yi.png', tags: ['Laravel', 'NGIИX', 'Linode'], link: 'https://clifmo.com' },
  { id: 2, name: 'Mo\'blog by Kriftonite', desc: 'Family blog website.', img: '/projects/moblog.png', tags: ['GatsbyJS', 'Netlify', 'Contentful'], link: 'https://clifmo.com' },
  { id: 3, name: 'ClifMo dot com', desc: 'Personal and professional website.', img: '/projects/clifmo.png', tags: ['Vue3', 'Vite', 'TypeScript'], link: 'https://clifmo.com' },
  { id: 4, name: 'R+L Carriers Shipping Rates', desc: 'Integrate R+L Carriers freight shipping rates into WordPress e-commerce websites.', img: '/projects/woo.png', tags: ['WordPress', 'WooCommerce'], link: 'https://clifmo.com' },
  { id: 5, name: 'Navalimpianti USA', desc: 'Mobile-first web application used on cruise ship decks.', img: '/projects/navi.png', tags: ['Slim', 'Linode'], link: 'https://clifmo.com' },
  { id: 6, name: 'International Kiko Goat Association', desc: 'Pedigree goat registry application.', img: '/projects/ikga.png', tags: ['Linode', 'Laravel'], link: 'https://clifmo.com' },
]

</script>

<template>
  <div class="container mt-24 flex justify-between items-center mx-auto px-4 md:px-4 lg:px-24 w-full">
    <section class="w-full">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div v-for="project in projects" :key="project.id" class="project shadow-lg bg-background-light">
          <div class="w-full rounded-sm p-6 flex flex-col justify-between leading-normal">
            <div>
              <div class="my-4 clearfix">
                <a class="float-right" :href="project.link">
                  <div i-carbon-dicom-overlay />
                </a>
              </div>
              <div class="text-primary-light font-bold text-xl mb-2">
                {{ project.name }}
              </div>
              <p class="text-label-info text-base">
                {{ project.desc }}
              </p>
            </div>
            <span class="w-72 h-72 mx-auto block shadow-lg shadow-gray-500/40 dark:shadow-none rounded-3xl">
              <img :src="project.img">
            </span>

            <div class="pt-10 pb-4">
              <span
                v-for="(item, index) in project.tags"
                :key="index"
                class="resume-tool"
                :index="index"
                :tagData="item"
              >{{ item }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- <div v-for="project in projects" :key="project.id" class="w-48 h-65 border-2 flex">
    <span class="project-name">{{ project.name }}</span>
    <img :src="project.img" class="mx-auto block  shadow-lg shadow-gray-500/40 dark:shadow-none rounded-3xl">
  </div> -->
</template>

<style scoped>
.project {
    display: grid;
    animation: mouseOut 0.3s ease-in;
}
.project:hover {
    animation: mouseOver 0.3s ease-in forwards;
}
@media only screen and (max-width: 600px) {
    .project {
        display: block;
        width: 100%;
    }
}
/**
 * Animaitons
 */
 /*
@keyframes mouseOver {
    0% {
        top: 0;
        background-color: #1d2c4e;
        display: block;
        transform: translateY(0%);
    }
    100% {
        top: -16px;
        background-color: #6d1485;
        transform: translateY(-2%);
    }
}
@keyframes mouseOut{
    0% {
        top: -16px;
        background-color: #6d1485;
        transform: translateY(-2%);
    } 100% {
        top: 0;
        background-color: #1d2c4e;
        transform: translateY(0%);
    }
}
*/
</style>
