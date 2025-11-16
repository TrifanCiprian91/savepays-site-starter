import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        babyblue: '#4DA3FF',
        babyblueDark: '#2A7EE6',
        textdark: '#0E1A2B',
        grayui: '#EEF3F7',
        eco: '#23C16B',
        danger: '#EF4444'
      },
      borderRadius: {
        'xl2': '1rem'
      }
    }
  },
  plugins: []
}
export default config
