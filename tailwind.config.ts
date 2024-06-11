import type { Config } from 'tailwindcss'

const colors = {
  primary: {
    enable: '#996515',
    hover: '#ceb471',
    active: '#996515',
  },
  secondary: {
    enable: '#ceb471',
    hover: '#ceb471',
    active: '#b0954f',
  },
  background: '#01011d',
  stroke: '#D5D7DD',
  white: '#F0F0F0',
  gray: '#7d818d',
  error: '#AC0707',
}

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors,
  },
  plugins: [],
}
export default config
