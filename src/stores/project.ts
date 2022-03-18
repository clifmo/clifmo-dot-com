import { acceptHMRUpdate, defineStore } from 'pinia'

export const useProjectStore = defineStore('project', () => {
  const projects = [
    { id: 1, name: 'YouImpact Victim Impact Panel', img: '/clifmo-toon.jpg', tags: ['tag1'], link: 'https://clifmo.com' },
    { id: 2, name: 'Mo\'blog by Kriftonite', img: '/clifmo-toon.jpg', tags: ['tag1', 'tag2'], link: 'https://clifmo.com' },
    { id: 3, name: 'ClifMo dot com', img: '/clifmo-toon.jpg', tags: ['tag1', 'tag2'], link: 'https://clifmo.com' },
    { id: 4, name: 'R+L Carriers Rates for WooCommerce', img: '/clifmo-toon.jpg', tags: ['tag1', 'tag2'], link: 'https://clifmo.com' },
    { id: 5, name: 'Cruise Saftey App for Navalimpianti USA', img: '/clifmo-toon.jpg', tags: ['tag1', 'tag2'], link: 'https://clifmo.com' },
    { id: 5, name: 'International Kiko Goat Association Registry', img: '/clifmo-toon.jpg', tags: ['tag1', 'tag2'], link: 'https://clifmo.com' },
  ]

  return {
    projects,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useProjectStore, import.meta.hot))
