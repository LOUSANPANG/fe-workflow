import extractorMdc from '@unocss/extractor-mdc'
import transformerDirectives from '@unocss/transformer-directives'
import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  theme: {
    breakpoints: {
      mobile: '320px',
      pc: '1280px',
    },
    colors: {
      primary: '#0ea5e9',
      success: '#10B981',
      warning: '#F59E0B',
      danger: '#EF4444',
      dark: '#0f172a',
      light: '#f8fafc',
      hover: '#0ea5e9',
      slate: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
      },
    },
  },

  presets: [
    presetUno(),
    presetIcons(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        'ubuntu-sans': 'Ubuntu Sans',
      },
    }),
  ],

  transformers: [
    transformerDirectives(),
  ],

  extractors: [
    extractorMdc(),
  ],
})
