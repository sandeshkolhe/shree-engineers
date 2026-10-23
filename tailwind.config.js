/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B132B',
          navy: '#1C2541',
          slate: '#3A506B',
          cyan: '#00B4D8',
          blue: '#0077B6',
          amber: '#F77F00',
          orange: '#FCBF49',
          light: '#F8FAFC'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      backgroundImage: {
        'blueprint-grid': "radial-gradient(rgba(0, 180, 216, 0.12) 1px, transparent 1px)",
        'tech-pattern': "linear-gradient(to right, rgba(28, 37, 65, 0.8), rgba(11, 19, 43, 0.95))"
      }
    },
  },
  plugins: [],
}
