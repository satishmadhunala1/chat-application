/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a73e8",
        secondary: "#f8f9fa",
        dark: "#202124",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 