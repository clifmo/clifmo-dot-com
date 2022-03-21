import { acceptHMRUpdate, defineStore } from 'pinia'

export const useProjectStore = defineStore('project', () => {
  const projects = [
    { id: 1, name: 'YouImpact', desc: '', summary: 'Victim impact panel used in DUI sentencing.', img: '/projects/yi.png', tags: ['Laravel', 'NGIИX', 'Linode', 'CentOS'], link: 'https://youimpact.com', icon: 'i-noto-letter-y' },
    { id: 2, name: 'Mo\'blog by Kriftonite', desc: '', summary: 'Family blog website.', img: '/projects/moblog.png', tags: ['GatsbyJS', 'Netlify', 'Contentful'], link: 'https://kriftonite.com', icon: 'i-emojione-crystal-ball' },
    { id: 3, name: 'ClifMo dot com', desc: '', summary: 'Personal and professional website.', img: '/projects/clifmo.png', tags: ['Vue3', 'Vite', 'TypeScript', 'Netlify'], link: 'https://clifmo.com', icon: 'i-carbon-globe' },
    { id: 4, name: 'R+L Carriers Shipping Rates', desc: '', summary: 'Freight rates for e-commerce websites.', img: '/projects/woo.png', tags: ['WordPress', 'WooCommerce'], link: 'https://wordpress.org/plugins/woo-shipping-method-rl-carriers/', icon: 'i-logos-woocommerce-icon' },
    { id: 5, name: 'Navalimpianti USA', desc: '', summary: 'Safety app used on cruise ship decks.', img: '/projects/navi.png', tags: ['Slim', 'Linode', 'CentOS'], link: 'https://www.navim.com/navalimpianti-usa-inc/', icon: 'i-noto-letter-n' },
    { id: 6, name: 'IKGA', desc: '', summary: 'Anmial registry and pedigree certificates.', img: '/projects/ikga.png', tags: ['Proxmox', 'Loadmaster', 'Self-hosted', 'Ubuntu'], link: 'https://registry.clifmo.com/', icon: 'i-emojione-goat' },
  ]

  return {
    projects,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useProjectStore, import.meta.hot))
