/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background Colors
        app: 'var(--bg-app)',
        elevated: 'var(--bg-elevated)',
        surface: 'var(--bg-surface)',

        // Borders
        border: 'var(--border)',

        // Accent colors
        primary: 'var(--accent-primary)',
        'accent-subtle': 'var(--accent-subtle)', 

        // States
        'state-inactive-muted': 'var(--state-inactive-muted)',
        'state-inactive-subtle': 'var(--state-inactive-subtle)',
        neutral: 'var(--state-neutral)',
        
        // Text Colors
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'text-subtle': 'var(--text-subtle)',
      },
    },
  },
  plugins: [],
}
