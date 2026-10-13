/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx,mjs}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      // Direction « futuriste sobre » : graphite, un seul accent (l’orange du logo).
      colors: {
        graphite: { 950: '#101215', 900: '#121417', 850: '#16191d', 800: '#1c2025', 700: '#262b31' },
        ligne: { DEFAULT: '#2a2f36', forte: '#3a4048', contour: '#4b535c' },
        encre: { DEFAULT: '#f4f5f7', 2: '#c9ced5', 3: '#a3abb5' },
        accent: { DEFAULT: '#e0641c', clair: '#f07a35', fonce: '#d95c15' },
      },
      fontFamily: {
        sans: ['var(--font-sora)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-azeret)', 'ui-monospace', 'monospace'],
      },
      borderRadius: { precis: '4px', vif: '2px' },
    },
  },
  // Conteneur maison (globals.css) : fluide jusqu'à 84rem, comme le premier écran.
  // Celui de Tailwind avance par paliers en px et ne suivait pas la taille de base.
  corePlugins: { container: false },
  plugins: [],
}
