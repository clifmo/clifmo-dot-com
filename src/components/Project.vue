<script setup lang="ts">
import { useProjectStore } from '../stores/project'
// import type { Project } from '../models/project.model'
const projectStore = useProjectStore()
const projects = projectStore.projects

</script>

<template>
  <div class="container mt-24 flex justify-between items-center mx-auto px-4 md:px-4 lg:px-24 w-full">
    <section class="w-full">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div v-for="project in projects" :key="project.id" class="project bg-background-light">
          <div class="w-full p-6 flex flex-col justify-between leading-normal">
            <div class="h-28">
              <div class="my-4 clearfix">
                <a class="float-right" :href="project.link">
                  <div text-2xl :class="project.icon" />
                </a>
              </div>
              <div class="text-primary-light font-bold text-xl mb-4">
                {{ project.name }}
              </div>
              <p class="text-label-info text-base mb-4">
                {{ project.summary }}
              </p>
            </div>
            <span class="w-72 h-72 mx-auto block shadow-lg shadow-gray-500/40 dark:shadow-none rounded-3xl">
              <img :src="project.img" class="rounded-3xl">
            </span>

            <div class="pt-8 pb-2">
              <span
                v-for="(item, index) in project.tags"
                :key="index"
                class="project-tag"
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
.project-tag:first-child::before {
  content: ''
}
.project-tag::before {
  content: '  |  '
}
/**
 * Animaitons
 */
 /*
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
