import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      coral: '#ff8882',
      purplehaze: '#543855',
      tan: '#e88d72',
      desertsun: '#fbb574',
    },
  },
  include: ['./src/**/*.vue', './src/**/*.js', './src/**/*.ts'],
  rules: [
    ['bg-clif-purple', { background: '#887799' }],
    ['xxs', { fontsize: '0.66rem' }],
  ],
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ['cyan-btn', 'rounded-full bg-cyan-500 py-3 px-8 text-white font-semibold shadow-xl shadow-cyan-500/30'],
    ['resume-tool', 'ml-3 text-xs inline-flex items-center text-size-2.5 leading-sm uppercase px-2 py-1 rounded-full bg-white text-gray-700 border shadow-md shadow-gray-700/20'],
    ['btn-clifmo', 'transition duration-100 flex sm:inline-flex justify-center items-center px-5 py-2 text-white font-semibold text-center rounded-md outline-none focus-visible:ring'],
    ['btn-clifmo-indigo', 'ring-indigo-300 dark:hover:bg-indigo-700 dark:active:bg-indigo-800 dark:bg-indigo-600 dark:shadow-lg dark:shadow-indigo-400/40 dark:hover:shadow-indigo-600/40 dark:active:shadow-indigo-700/40'],
    ['btn-clifmo-slate', 'ring-slate-100 hover:bg-slate-400 active:bg-slate-500 bg-slate-500/90 shadow-lg shadow-slate-100/40 hover:shadow-slate-300/40 active:shadow-slate-400/40 text-slate-10'],
    ['btn-old', 'bg-indigo-700 text-gray-800 bg-gray-100 dark:bg-gray-600 no-underline px-4 py-3 shadow-lg shadow-gray-500/30 dark:shadow-gray-700/60 rounded not-prose'],
    ['btn-salmon', 'text-slate-50 dark:text-slate-100 bg-coral dark:bg-tan no-underline px-4 py-3 shadow-lg shadow-rose-300/30 dark:shadow-xl dark:shadow-none rounded not-prose'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'google', // default provider
      fonts: {
        sans: 'Montserrat',
        serif: 'Cabin',
        mono: ['Fira Code', 'Fira Mono:400,700'],
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
