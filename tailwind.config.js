/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mt-navy': '#201E59',
        'mt-purple-deep': '#2703A6',
        'mt-purple-brand': '#6A2EA6',
        'mt-purple-mid': '#3A1F73',
        'mt-cyan': '#00ABDB',
        'mt-gold-bright': '#EDD66D',
        'mt-gold-warm': '#DD9A4A',
        'mt-pink': '#F2B0FC',
        'mt-blue-soft': '#B0DAFF',
        'mt-red': '#B00020',
        'mt-green': '#0D7C66',
        'mt-white': '#FFFFFF',
        'mt-gray-border': '#E2E4EA',
        
        // Semantic tokens
        primary: '#201E59',
        titleclr: '#2703A6',
        accent: '#00ABDB',
        gold: '#EDD66D',
        'gold-light': '#DD9A4A',
        alert: '#B00020',
        success: '#0D7C66',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        'container': '1200px',
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '2rem',
        'lg': '3rem',
        'xl': '4rem',
      },
    },
  },
  plugins: [],
}
