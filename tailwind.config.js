/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        steel: {
          900: '#1a202c',
          800: '#2d3748',
          700: '#4a5568',
          600: '#718096',
          500: '#a0aec0',
          400: '#cbd5e0',
          300: '#e2e8f0',
        },
        deepEmerald: {
          900: '#022c22',
          800: '#064e3b', // Deep Emerald
          700: '#047857',
          600: '#059669',
        },
        earthStone: {
          900: '#451a03',
          800: '#78350f', // Earth Stone
          700: '#92400e',
          600: '#b45309',
          500: '#d97706', // Stone Accent
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      }
    },
  },
  plugins: [],
}
