/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Source Sans 3"', '"Noto Sans Telugu"', '"Noto Sans Devanagari"', 'system-ui', 'sans-serif'],
      },
      colors: {
        forest: {
          50: '#F1F6F1',
          100: '#DFEBDF',
          200: '#BFD6C0',
          300: '#93B998',
          400: '#5F936A',
          500: '#42744B',
          600: '#315B36',
          700: '#27482B',
          800: '#1E381F',
          900: '#14261A',
        },
        ivory: {
          50: '#FFFCF5',
          100: '#FBF7EE',
          200: '#F5EBD7',
          300: '#EBDDBE',
        },
        saffron: {
          50: '#FDF6EA',
          100: '#FAEACD',
          300: '#E0B06A',
          500: '#C58A32',
          600: '#A96F22',
          700: '#8A5818',
        },
        earth: {
          50: '#F8F2EE',
          100: '#EEDFD5',
          500: '#6B4433',
          600: '#5A3929',
          700: '#4A2F22',
        },
        charcoal: {
          500: '#5C5C5C',
          600: '#4A4A4A',
          700: '#3A3A3A',
          800: '#292929',
        },
        success: { 600: '#2E7D4F', 100: '#E3F2E9' },
        warning: { 600: '#9A6B00', 100: '#FFF4D6' },
        error: { 600: '#B42318', 100: '#FDE7E4' },
      },
    },
  },
  plugins: [],
};
