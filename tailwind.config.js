/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*jsx'],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Inter, sans-serif',
      },
      colors:{
        purple:{
          500: '#8284FA',
          900: '#5E60CE'
        },
        blue:{
          500: '#4EA8DE',
          900: '#1E6F9F'
        },
        gray:{
          100: '#F2F2F2',
          200: '#D9D9D9',
          300: '#808080',
          400: '#333333',
          500: '#262626',
          600: '#1A1A1A',
          700: '#0D0D0D'
        },
        danger:{
          500: '#E25858'
        },
        screens: {
          'md': '890px'
        },
      },
    },
  },
  plugins: [],
}

