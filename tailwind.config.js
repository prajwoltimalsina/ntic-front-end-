/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
    extend: {
      colors: {
        primary: "#8c3437",       // Main brand color (blue)
        primaryLight: "#d48f91",  // Light variant
        secondary: "#347d6c",     // Accent color (green)
      }
    }
  },
  plugins: []
}



