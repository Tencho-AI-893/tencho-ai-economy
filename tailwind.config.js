/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tencho-black': '#080808',
        'tencho-card': '#0a0a0a',
        'tencho-card-hover': '#0f0f0f',
        'tencho-red': '#b71c1c',
        'tencho-red-bright': '#c62828',
        'tencho-red-glow': '#d32f2f',
        'tencho-text': '#e8e8e8',
        'tencho-text-secondary': '#a0a0a0',
        'tencho-text-muted': '#5a5a5a',
        'tencho-border': 'rgba(255,255,255,0.05)',
        'tencho-border-hover': 'rgba(183,28,28,0.4)',
      },
      fontFamily: {
        'display': ['"Noto Serif JP"', '"Times New Roman"', 'serif'],
        'body': ['"Noto Sans JP"', '"Inter"', '"Helvetica Neue"', 'sans-serif'],
        'mono': ['"JetBrains Mono"', '"SF Mono"', '"Courier New"', 'monospace'],
      },
      letterSpacing: {
        'widest-xl': '0.4em',
        'widest-2xl': '0.6em',
      },
    },
  },
  plugins: [],
}
