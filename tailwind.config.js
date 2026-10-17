/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFFFF',
          100: '#FDFBF7', // main white cream background
          150: '#FAF6F0', // section background
          200: '#F4EEE5', // card surface
          250: '#EFE7DB',
          300: '#E5DACB', // subtle borders
          400: '#D5C6B1',
          500: '#BAA58C',
          muted: '#736B63',
        },
        maroon: {
          950: '#1A0309', // deepest dark maroon
          900: '#2A050E', // luxury dark maroon
          850: '#380713',
          800: '#4A0A1A', // primary dark maroon
          750: '#5A0D20',
          700: '#6E1128', // accent maroon
          600: '#8E1735',
          500: '#B22045',
          100: '#FCEBEF', // light maroon tint
          50: '#FDF5F7',
        },
        champagne: {
          500: '#C5A059',
          600: '#B38E47',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'cream-card': '0 4px 25px -4px rgba(59, 7, 20, 0.06)',
        'maroon-hover': '0 12px 32px -6px rgba(59, 7, 20, 0.14)',
        'maroon-dark': '0 10px 30px -5px rgba(26, 3, 9, 0.35)',
      }
    },
  },
  plugins: [],
}
