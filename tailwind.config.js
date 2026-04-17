/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#0d1117',
        sidebar: '#010409',
        hover: '#161b22',
        active: '#21262d',
        border: '#30363d',
        heading: '#e6edf3',
        text: '#c9d1d9',
        muted: '#7d8590',
        link: '#58a6ff',
        'code-bg': '#161b22',
        'code-text': '#79c0ff',
      },
    },
  },
  plugins: [],
}
