/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'gray-50': '#F9FAFB',
        'gray-100': '#F2F4F7',
        'gray-200': '#EAECF0',
        'gray-300': '#D8E0E9',
        'gray-400': '#F97066',
        'gray-500': '#667085',
        'gray-600': '#475467',
        'gray-800': '#1D2939',
        'gray-900': '#101828',
        'gray-muted': '#7D879C',
        'gray-dark': '#2B3445',
        'dark-500': '#1E1E1E',
        'error': '#F97066',
        'primary-950': '#04ACC9',
        'primary-500': '#5AC1DA',
        'primary-200': '#04ACC926',
        'body': '#F5F5F5'
      },
      fontFamily: {
        'poppins': 'Noto Kufi Arabic, Poppins, sans-serif',
      },
    },
  },
  plugins: [],
}

